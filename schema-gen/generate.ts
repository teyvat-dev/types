import { join } from "path";
import { writeFileSync, readFileSync, unlinkSync } from "fs";
// This is required to be required
const typedoc = require("typedoc");
const mkdirp = require("mkdirp");

const getTag = (type: any, searchTag: string) => {
  const tags: any[] = type.comment?.tags;

  if (tags && tags.length >= 1) {
    const matchedTagIndex = tags.findIndex((item) => item.tag === searchTag);

    if (matchedTagIndex !== -1) {
      return tags[matchedTagIndex].text.trim();
    }
  }

  return undefined;
};

const parseDocs = (unparsedJSON: Record<string, any>) => {
  // There is only one top level child so it is safe to select the first one
  const children = unparsedJSON.children[0].children;

  const parsedJSONs: { [key: string]: any } = {};

  for (const child of children) {
    if (!child.children) {
      continue;
    }

    const name = child.name;

    const note = getTag(child, "note");
    const endpoints = getTag(child, "endpoints");

    const parsedChildren = child.children
      .map((innerType) => ({
        name: innerType.name,
        description: innerType.comment?.shortText || undefined,
        type:
          getTag(innerType, "real-type") ||
          innerType.type.name ||
          (innerType.type.indexType && innerType.type.indexType.type) ||
          undefined,
        note: getTag(innerType, "note") || undefined,
      }))
      .filter((item) => item.description);

    parsedJSONs[name] = { note, endpoints, values: parsedChildren };
  }

  return parsedJSONs;
};

// Setup our paths
const outPath = join("schema-gen", "output.json");
const filePaths = [join("src", "docd.ts")];

// Setup our TypeDoc app
const app = new typedoc.Application();

// Generate the Raw TSDoc JSON
// TODO: this would be nicer if I did not have to write a file
app.generateJson(filePaths, outPath);

// Read and parse it back in
// TODO: Maybe type this
const json = JSON.parse(readFileSync(outPath, "utf8"));

// Parse it properly
const parsedJSONs = parseDocs(json);

mkdirp.sync(join("schema-gen", "output", "entities"));

// Write each type to a file
for (const [key, value] of Object.entries(parsedJSONs)) {
  writeFileSync(
    join("schema-gen", "output", "entities", `${key}.json`),
    JSON.stringify(value)
  );
}

// Write a file containing all types (bar default)
writeFileSync(
  join("schema-gen", "output", `entities.json`),
  JSON.stringify(Object.keys(parsedJSONs).filter((item) => item !== "Defaults"))
);

unlinkSync(join("schema-gen", "output.json"));
