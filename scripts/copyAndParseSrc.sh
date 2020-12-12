#! /bin/bash

# Copy
mkdir -p src/types/client
mkdir -p src/types/runtime
cp -r node_modules/.prisma/client/index.d.ts src/types/client/index.d.ts 
cp -r node_modules/@prisma/client/runtime/index.d.ts src/types/runtime/index.d.ts
cp -r node_modules/@prisma/client/runtime/index-browser.d.ts src/types/runtime/index-browser.d.ts

# Parse
sed -i 's~@prisma/client~..~g' src/types/client/index.d.ts
