import * as Client from "./types/client";

interface Defaults {
  /**
   * The CUID used for direct referencing of the item
   *
   * @real-type CUID String
   */
  id: string;
  /**
   * An ISO Date String to know when the data was orginally created in the database
   *
   * @real-type ISO Date String
   */
  createdAt: Date;
  /**
   * An ISO Date String to know when the data was last updated in the database
   * This is useful for cache breaking
   *
   * @real-type ISO Date String
   */
  updatedAt: Date;
}

/**
 * @endpoints "[\"artifact\",\"artifacts\",\"filterArtifacts\"]"
 * @note unimplemented
 */
export interface Artifact extends Client.Artifact, Defaults {
  /**
   * Name of the Artifact
   *
   * @real-type String
   */
  name: Client.Artifact["name"];
  /**
   * Artifact lore / story
   *
   * @real-type String
   */
  lore: Client.Artifact["lore"];
  /**
   * Artifacts minimum obtainable rairty
   *
   * @real-type Number
   */
  minRarity: Client.Artifact["minRarity"];
  /**
   * Artifacts possible Main Stats (To be moved to sets)
   *
   * @real-type JSON - TODO
   */
  possibleMainStats: Client.Artifact["possibleMainStats"];
  /**
   * Artifacts possible Sub Stats (To be moved to sets)
   *
   * @real-type JSON - TODO
   */
  possibleSubStats: Client.Artifact["possibleSubStats"];
  /**
   * Artifacts sources
   *
   * @real-type JSON - TODO
   */
  source: Client.Artifact["source"];
  /**
   * Artifacts type
   *
   * @real-type String
   */
  type: Client.Artifact["type"];
  /**
   * The artifact set id that the Artifact belongs to
   *
   * @real-type CUID String
   */
  artifactSetId: Client.Artifact["artifactSetId"];
  /**
   * The domain id that the artifact can be found in ( may be moved to sets )
   *
   * @real-type CUID String
   */
  domainId: Client.Artifact["domainId"];
}

/**
 * @endpoints "[\"artifactSet\",\"artifactSets\",\"filterArtifactSets\"]"
 * @note unimplemented
 */
export interface ArtifactSet extends Client.ArtifactSet, Defaults {
  /**
   * Name of the ArtifactSet
   *
   * @real-type String
   */
  name: Client.ArtifactSet["name"];
  /**
   * Image URI of the ArtifactSet (flower)
   *
   * @real-type String
   */
  image: Client.ArtifactSet["image"];
  /**
   * The Maximum rarity level of the ArtifactSet
   *
   * @real-type String
   */
  maxRarity: Client.ArtifactSet["maxRarity"];
  /**
   * Description of the bonus given by the artifact set when Four artifacts are equipped
   *
   * @real-type String
   */
  pieceBonusFour: Client.ArtifactSet["pieceBonusFour"];
  /**
   * Description of the bonus given by the artifact set when Two artifacts are equipped
   *
   * @real-type String
   */
  pieceBonusTwo: Client.ArtifactSet["pieceBonusTwo"];
  /**
   * Description of the bonus given by the artifact set when One artifacts are equipped
   *
   * @real-type String
   */
  pieceBonusOne: Client.ArtifactSet["pieceBonusOne"];
}

/**
 * @endpoints "[\"character\",\"characters\",\"filterCharacters\"]"
 * @note beta
 */
export interface Character extends Client.Character, Defaults {
  /**
   * Name of the Character
   *
   * @real-type String
   */
  name: Client.Character["name"];
  /**
   * Constellations that the character has
   *
   * @real-type {name: string, level: number, effect: string}[]
   */
  constellations: Client.Character["constellations"];
  /**
   * Overview simple description of the character
   *
   * @real-type String
   */
  overview: Client.Character["overview"];
  /**
   * Rarity of the Character
   *
   * @real-type Number
   */
  rarity: Client.Character["rarity"];
  /**
   * Base stats of the Character
   *
   * @real-type JSON - TODO
   */
  stats: Client.Character["stats"];
  /**
   * Weapon type that the character weilds
   *
   * @real-type String
   */
  weapon: Client.Character["weapon"];
}

/**
 * @endpoints "[\"characterAscension\",\"characterAscensions\",\"filterCharacterAscension\"]"
 * @note unimplemented
 */
export interface CharacterAscension
  extends Client.CharacterAscension,
    Defaults {
  /**
   * The level the CharacterAscension is required
   *
   * @real-type Number
   */
  level: Client.CharacterAscension["level"];
  /**
   * The maximum level afforded by the CharacterAscension
   *
   * @real-type Number
   */
  maxLevel: Client.CharacterAscension["maxLevel"];
  /**
   * Recipe for the CharacterAsension
   *
   * @real-type JSON - TODO
   */
  recipe: Client.CharacterAscension["recipe"];
  /**
   * The Character Id connected to the CharacterAscension
   *
   * @real-type CUID String
   */
  characterId: Client.CharacterAscension["characterId"];
  /**
   * The CharacterAsensionMaterial Id required by the CharacterAscension
   *
   * @real-type CUID String
   */
  characterAscensionMaterialId: Client.CharacterAscension["characterAscensionMaterialId"];
}

/**
 * @endpoints "[\"characterAscensionMaterial\",\"characterAscensionMaterials\",\"filterCharacterAscensionMaterials\"]"
 * @note unimplemented
 */
export interface CharacterAscensionMaterial
  extends Client.CharacterAscensionMaterial,
    Defaults {
  /**
   * Name of the CharacterAscensionMaterial
   *
   * @real-type String
   */
  name: Client.CharacterAscensionMaterial["name"];
  /**
   * Description for the CharacterAscensionMaterial
   *
   * @real-type String
   */
  description: Client.CharacterAscensionMaterial["description"];
  /**
   * Icon URL of the CharacterAscensionMaterial
   *
   * @real-type String
   */
  image: Client.CharacterAscensionMaterial["image"];
  /**
   * Rarity of the CharacterAscensionMaterial
   *
   * @real-type Number
   */
  rarity: Client.CharacterAscensionMaterial["rarity"];
  /**
   * Sources of the CharacterAscensionMaterial
   *
   * @real-type JSON - TODO
   */
  source: Client.CharacterAscensionMaterial["source"];
  /**
   * Name of the Group that the CharacterAscensionMaterial belongs to
   *
   * @real-type String
   */
  group: Client.CharacterAscensionMaterial["group"];
}

/**
 * @endpoints "[\"characterProfile\",\"characterProfiles\",\"filterCharacterProfiles\"]"
 * @note beta
 */
export interface CharacterProfile extends Client.CharacterProfile, Defaults {
  /**
   * Affiliation Group of the Character
   *
   * @real-type String
   */
  affiliation: Client.CharacterProfile["affiliation"];
  /**
   * Birthday of the Character
   *
   * @real-type String
   */
  birthday: Client.CharacterProfile["birthday"];
  /**
   * Name of the constellation the Character posesses
   *
   * @real-type String
   */
  constellation: Client.CharacterProfile["constellation"];
  /**
   * JSON object containing Character image urls
   *
   * @real-type JSON - "{\"icon\":\"string\",\"portrait\":\"string\",\"inGame\":\"string\"}"
   */
  images: Client.CharacterProfile["images"];
  /**
   * Detailed overview of the Character
   *
   * @real-type String
   */
  overview: Client.CharacterProfile["overview"];
  /**
   * JSON object containing the storys of the Character
   *
   * @note The json object consists of a key string of the title and the value of the string, it is advised to use Object.entries() to parse this data
   * @real-type JSON - "{\"string\":\"string\"}"
   */
  story: Client.CharacterProfile["story"];
  /**
   * JSON object containing the voice actors of the Character
   *
   * @real-type JSON - "{\"en\":\"string\",\"jp\":\"string\",\"kr\":\"string\",\"cn\":\"string\"}"
   */
  voiceActor: Client.CharacterProfile["voiceActor"];
  /**
   * JSON object containing the voice lines of the Character
   *
   * @real-type JSON - TODO
   */
  voiceLines: Client.CharacterProfile["voiceLines"];
  /**
   * Id of the Character that this profile belongs to
   *
   * @note Can be used to query the Character entitity
   * @real-type string
   */
  characterId: Client.CharacterProfile["characterId"];
  /**
   * Id of the region the Character belongs to
   *
   * @note Can be used to query the Reigon entitity
   * @real-type string
   */
  regionId: Client.CharacterProfile["regionId"];
  /**
   * Id of the element the Character posesses
   *
   * @note Can be used to query the Element entitity
   * @real-type string
   */
  elementId: Client.CharacterProfile["elementId"];
}

/**
 * @endpoints "[\"commonAscensionMaterial\",\"commonAscensionMaterials\",\"filterCommonAscensionMaterial\"]"
 * @note unimplemented
 */
export interface CommonAscensionMaterial
  extends Client.CommonAscensionMaterial,
    Defaults {
  /**
   * Name of the CommonAscensionMaterial
   *
   * @real-type String
   */
  name: Client.CommonAscensionMaterial["name"];
  /**
   * Description for the CommonAscensionMaterial
   *
   * @real-type String
   */
  description: Client.CommonAscensionMaterial["description"];
  /**
   * Icon URL of the CommonAscensionMaterial
   *
   * @real-type String
   */
  image: Client.CommonAscensionMaterial["image"];
  /**
   * Rarity of the CommonAscensionMaterial
   *
   * @real-type Number
   */
  rarity: Client.CommonAscensionMaterial["rarity"];
  /**
   * Sources of the CommonAscensionMaterial
   *
   * @real-type JSON - TODO
   */
  //source: Client.CommonAscensionMaterial["source"];
  /**
   * Name of the Group that the CommonAscensionMaterial belongs to
   *
   * @real-type String
   */
  group: Client.CommonAscensionMaterial["group"];
}

/**
 * @endpoints "[\"commonMaterial\",\"commonMaterials\",\"filterCommonMaterials\"]"
 * @note unimplemented
 */
export interface CommonMaterial extends Client.CommonMaterial, Defaults {
  /**
   * Name of the CommonMaterial
   *
   * @real-type String
   */
  name: Client.CommonMaterial["name"];
  /**
   * Description for the CommonMaterial
   *
   * @real-type String
   */
  description: Client.CommonMaterial["description"];
  /**
   * Icon URL of the CommonMaterial
   *
   * @real-type String
   */
  image: Client.CommonMaterial["image"];
  /**
   * Rarity of the CommonMaterial
   *
   * @real-type Number
   */
  rarity: Client.CommonMaterial["rarity"];
  /**
   * Sources of the CommonMaterial
   *
   * @real-type JSON - TODO
   */
  source: Client.CommonMaterial["source"];
}

/**
 * @endpoints "[\"consumeable\",\"consumeables\",\"filterConsumeables\"]"
 * @note unimplemented
 */
export interface Consumeable extends Client.Consumeable, Defaults {
  /**
   * Name of the Consumeable
   *
   * @real-type String
   */
  name: Client.Consumeable["name"];
  /**
   * Description for the Consumeable
   *
   * @real-type String
   */
  description: Client.Consumeable["description"];
  /**
   * Effect of the Consumeable
   *
   * @real-type String
   */
  effect: Client.Consumeable["effect"];
  /**
   * Icon URL of the Consumeable
   *
   * @real-type String
   */
  image: Client.Consumeable["image"];
  /**
   * Rarity of the Consumeable
   *
   * @real-type Number
   */
  rarity: Client.Consumeable["rarity"];
  /**
   * Type of the Consumeable
   *
   * @real-type String - "Food" or "Potion"
   */
  consumeableType: Client.Consumeable["consumeableType"];
  /**
   * Type of the Consumeable
   *
   * @real-type String - "Adventurer" | "Guardian" | "Sage" | "Warrior"
   */
  foodType: Client.Consumeable["foodType"];
  /**
   * Id of the characterProfile that this consumeable is SpecialtyDish of
   *
   * @note Can be used to query the CharacterProfile entitity
   * @real-type String
   */
  characterProfileId: Client.Consumeable["characterProfileId"];
}

/**
 * @endpoints "[\"consumeableRecipe\",\"consumeableRecipes\",\"filterConsumeableRecipes\"]"
 * @note unimplemented
 */
export interface ConsumeableRecipe extends Client.ConsumeableRecipe, Defaults {
  /**
   * JSON Representation of the Recipe
   *
   * @real-type JSON - TODO
   */
  recipe: Client.ConsumeableRecipe["recipe"];
  /**
   * Id of the Consumebale that the Recipe creates
   *
   * @note Can be used to query the Consumebale entitity
   * @real-type String
   */
  consumeableId: Client.ConsumeableRecipe["consumeableId"];
}

/**
 * @endpoints "[\"cookingMaterial\",\"cookingMaterials\",\"filterCookingMaterials\"]"
 * @note unimplemented
 */
export interface CookingMaterial extends Client.CookingMaterial, Defaults {
  /**
   * Name of the CookingMaterial
   *
   * @real-type String
   */
  name: Client.CookingMaterial["name"];
  /**
   * Description for the CookingMaterial
   *
   * @real-type String
   */
  description: Client.CookingMaterial["description"];
  /**
   * Icon URL of the CookingMaterial
   *
   * @real-type String
   */
  image: Client.CookingMaterial["image"];
  /**
   * Rarity of the CookingMaterial
   *
   * @real-type Number
   */
  rarity: Client.CookingMaterial["rarity"];
  /**
   * Sources of the CookingMaterial
   *
   * @real-type JSON - TODO
   */
  source: Client.CookingMaterial["source"];
}

/**
 * @endpoints "[\"craftingMaterial\",\"craftingMaterials\",\"filterCraftingMaterials\"]"
 * @note unimplemented
 */
export interface CraftingMaterial extends Client.CraftingMaterial, Defaults {
  /**
   * Name of the CraftingMaterial
   *
   * @real-type String
   */
  name: Client.CraftingMaterial["name"];
  /**
   * Description for the CraftingMaterial
   *
   * @real-type String
   */
  description: Client.CraftingMaterial["description"];
  /**
   * Icon URL of the CraftingMaterial
   *
   * @real-type String
   */
  image: Client.CraftingMaterial["image"];
  /**
   * Rarity of the CraftingMaterial
   *
   * @real-type Number
   */
  rarity: Client.CraftingMaterial["rarity"];
  /**
   * Sources of the CraftingMaterial
   *
   * @real-type JSON - TODO
   */
  source: Client.CraftingMaterial["source"];
}

/**
 * @endpoints "[\"forgeRecipe\",\"forgeRecipes\",\"filterForgeRecipes\"]"
 * @note unimplemented
 */
export interface ForgeRecipe extends Client.ForgeRecipe, Defaults {
  /**
   * Crafting time in seconds that the Recipe takes
   *
   * @real-type Number
   */
  craftingTime: Client.ForgeRecipe["craftingTime"];
  /**
   * JSON Representation of the Recipe
   *
   * @real-type JSON - TODO
   */
  recipe: Client.ForgeRecipe["recipe"];
  /**
   * Id of the Weapon that the Recipe creates
   *
   * @note Can be used to query the Weapon entitity
   * @real-type String
   */
  weaponId: Client.ForgeRecipe["weaponId"];
  /**
   * Id of the WeaponEnhancementMaterialId that the Recipe creates
   *
   * @note Can be used to query the WeaponEnhancementMaterial entitity
   * @real-type String
   */
  weaponEnhancementMaterialId: Client.ForgeRecipe["weaponEnhancementMaterialId"];
}

/**
 * @endpoints "[\"processRecipe\",\"processRecipes\",\"filterProcessRecipes\"]"
 * @note unimplemented
 */
export interface ProcessRecipe extends Client.ProcessRecipe, Defaults {
  /**
   * Processing time in seconds that the Recipe takes
   *
   * @real-type Number
   */
  processingTime: Client.ProcessRecipe["processingTime"];
  /**
   * JSON Representation of the Recipe
   *
   * @real-type JSON - TODO
   */
  recipe: Client.ProcessRecipe["recipe"];
  /**
   * Id of the CookingMaterial that the Recipe creates
   *
   * @note Can be used to query the CookingMaterial entitity
   * @real-type String
   */
  materialId: Client.ProcessRecipe["materialId"];
}

/**
 * @endpoints "[\"domain\",\"domains\",\"filterDomains\"]"
 * @note unimplemented
 */
export interface Domain extends Client.Domain, Defaults {
  /**
   * Name of the Domain
   *
   * @real-type String
   */
  name: Client.Domain["name"];
  /**
   * Description of the Domain
   *
   * @real-type String
   */
  description: Client.Domain["description"];
  /**
   * JSON representation of the Levels in the Domain
   *
   * @real-type JSON - TODO
   */
  levels: Client.Domain["levels"];
  /**
   * Type of the Domain
   *
   * @real-type String
   */
  type: Client.Domain["type"];
  /**
   * Id of the Region that the Domain resides in
   *
   * @note Can be used to query the Region entitity
   * @real-type String
   */
  regionId: Client.Domain["regionId"];
}

/**
 * @endpoints "[\"element\",\"elements\",\"filterElements\"]"
 * @note beta
 */
export interface Element extends Client.Element, Defaults {
  /**
   * Name of the Element
   *
   * @real-type String
   */
  name: Client.Element["name"];
  /**
   * Archon of the Element
   *
   * @real-type String
   */
  archon: Client.Element["archon"];
  /**
   * Status Effect of the Element (debuff)
   *
   * @real-type String
   */
  statusEffect: Client.Element["statusEffect"];
  /**
   * Theme of the Element (also in region)
   *
   * @real-type String
   */
  theme: Client.Element["theme"];
  /**
   * Id of the Region that the Element is correlated with
   *
   * @note Can be used to query the Region entitity
   * @real-type String
   */
  regionId: Client.Element["regionId"];
}

/**
 * @endpoints "[\"region\",\"regions\",\"filterRegions\"]"
 * @note beta
 */
export interface Region extends Client.Region, Defaults {
  /**
   * Name of the Region
   *
   * @real-type String
   */
  name: Client.Region["name"];
}

/**
 * @endpoints "[\"talent\",\"talents\",\"filterTalents\"]"
 * @note beta
 */
export interface Talent extends Client.Talent, Defaults {
  /**
   * Name of the Talent
   *
   * @real-type String
   */
  name: Client.Talent["name"];
  /**
   * Description of the Talent
   *
   * @real-type String
   */
  description: Client.Talent["description"];
  /**
   * JSON representation of the Talents details
   *
   * @real-type JSON - TODO
   */
  details: Client.Talent["details"];
  /**
   * Type of the Talent eg. Combat Talent
   *
   * @real-type String
   */
  type: Client.Talent["type"];
  /**
   * Id of the Character that this Talent belongs to
   *
   * @note Can be used to query the Character entitity
   * @real-type string
   */
  characterId: Client.Talent["characterId"];
  /**
   * Id of the Weekly Boss Material that this Talent requires to level up
   *
   * @note Can be used to query the TalentLevelUpMaterial entitity
   * @real-type string
   */
  talentLevelUpMaterialId: Client.Talent["talentLevelUpMaterialId"];
}

/**
 * @endpoints "[\"talentLevelUpMaterial\",\"talentLevelUpMaterials\",\"filterTalentLevelUpMaterials\"]"
 * @note unimplemented
 */
export interface TalentLevelUpMaterial
  extends Client.TalentLevelUpMaterial,
    Defaults {
  /**
   * Name of the TalentLevelUpMaterial
   *
   * @real-type String
   */
  name: Client.TalentLevelUpMaterial["name"];
  /**
   * Description for the TalentLevelUpMaterial
   *
   * @real-type String
   */
  description: Client.TalentLevelUpMaterial["description"];
  /**
   * JSON Representation of where the TalentLevelUpMaterial can be found. eg. Domains & When
   *
   * @real-type JSON - TODO
   */
  availability: Client.TalentLevelUpMaterial["availability"];
  /**
   * Icon URL of the TalentLevelUpMaterial
   *
   * @real-type String
   */
  image: Client.TalentLevelUpMaterial["image"];
  /**
   * Rarity of the TalentLevelUpMaterial
   *
   * @real-type Number
   */
  rarity: Client.TalentLevelUpMaterial["rarity"];
  /**
   * Name of the group that the TalentLevelUpMaterial belongs to
   *
   * @real-type String
   */
  group: Client.TalentLevelUpMaterial["group"];
  /**
   * Id of the domain where the TalentLevelUpMaterial can be obtained
   *
   * @note Can be used to query the Domain entitity
   * @real-type string
   */
  domainId: Client.TalentLevelUpMaterial["domainId"];
}

/**
 * @endpoints "[\"me\"]"
 * @note beta
 */
export interface Me extends Client.User, Defaults {
  /**
   * Username of your account
   *
   * @real-type String
   */
  username: Client.User["username"];
  /**
   * Email of your account
   *
   * @real-type String
   */
  email: Client.User["email"];
  /**
   * Role that your account has
   *
   * @real-type String
   */
  role: Client.User["role"];
}

/**
 * @endpoints "[\"weapon\",\"weapons\",\"filterWeapons\"]"
 * @note beta
 */
export interface Weapon extends Client.Weapon, Defaults {
  /**
   * Name of the Weapon
   *
   * @real-type String
   */
  name: Client.Weapon["name"];
  /**
   * JSON representation of baseStats of the Weapon
   *
   * @real-type JSON - TODO
   */
  baseStats: Client.Weapon["baseStats"];
  /**
   * Description of the Weapon
   *
   * @real-type String
   */
  description: Client.Weapon["description"];
  /**
   * Icon URL of the Weapon
   *
   * @real-type String
   */
  image: Client.Weapon["image"];
  /**
   * Lore in the long description of the weapon
   *
   * @real-type String
   */
  lore: Client.Weapon["lore"];
  /**
   * JSON containing the name, description of the Weapons Passive
   *
   * @real-type JSON - TODO
   */
  passive: Client.Weapon["passive"];
  /**
   * Rarity of the Weapon
   *
   * @real-type String
   */
  rarity: Client.Weapon["rarity"];
  /**
   * JSON representation of the Weapons refinement levels
   *
   * @real-type JSON - TODO
   */
  refinements: Client.Weapon["refinements"];
  /**
   * JSON representation of the Weapons Stats
   *
   * @real-type JSON - TODO
   */
  stats: Client.Weapon["stats"];
  /**
   * Name of the secondary stat type
   *
   * @real-type String
   */
  secondaryStatType: Client.Weapon["secondaryStatType"];
  /**
   * Type of the Weapon
   *
   * @real-type String - "Bow" | "Catalyst" | "Claymore" | "Polearm" | "Sword"
   */
  type: Client.Weapon["type"];
}

/**
 * @endpoints "[\"weaponAscension\",\"weaponAscensions\",\"filterWeaponAscensions\"]"
 * @note unimplemented
 */
export interface WeaponAscension extends Client.WeaponAscension, Defaults {
  /**
   * Level that the WeaponAscension is required
   *
   * @real-type Number
   */
  level: Client.WeaponAscension["level"];
  /**
   * Max level that this WeaponAscension affords
   *
   * @real-type Number
   */
  maxLevel: Client.WeaponAscension["maxLevel"];
  /**
   * JSON representation of the Recipe that makes up the WeaponAscension
   *
   * @real-type Number
   */
  recipe: Client.WeaponAscension["recipe"];
  /**
   * Id of the WeaponAscensionMaterial that the WeaponAscension requires
   *
   * @note Can be used to query the WeaponAscensionMaterial entitity
   * @real-type string
   */
  weaponAscensionMaterialId: Client.WeaponAscension["weaponAscensionMaterialId"];
  /**
   * Id of the Weapon that the WeaponAscension belongs to
   *
   * @note Can be used to query the Weapon entitity
   * @real-type string
   */
  weaponId: Client.WeaponAscension["weaponId"];
}

/**
 * @endpoints "[\"weaponAscensionMaterial\",\"weaponAscensionMaterials\",\"filterWeaponAscensionMaterials\"]"
 * @note unimplemented
 */
export interface WeaponAscensionMaterial
  extends Client.WeaponAscensionMaterial,
    Defaults {
  /**
   * Name of the WeaponAscensionMaterial
   *
   * @real-type String
   */
  name: Client.WeaponAscensionMaterial["name"];
  /**
   * Description for the WeaponAscensionMaterial
   *
   * @real-type String
   */
  description: Client.WeaponAscensionMaterial["description"];
  /**
   * Icon URL of the WeaponAscensionMaterial
   *
   * @real-type String
   */
  image: Client.WeaponAscensionMaterial["image"];
  /**
   * Rarity of the WeaponAscensionMaterial
   *
   * @real-type Number
   */
  rarity: Client.WeaponAscensionMaterial["rarity"];
  /**
   * Domains where the WeaponAscensionMaterial can be found and when
   *
   * @real-type JSON - TODO
   */
  availability: Client.WeaponAscensionMaterial["availability"];
  /**
   * Name of the Group that the WeaponAscensionMaterial belongs to
   *
   * @real-type String
   */
  group: Client.WeaponAscensionMaterial["group"];
  /**
   * Id of the domain where the WeaponAscensionMaterial can be obtained
   *
   * @note Can be used to query the Domain entitity
   * @real-type string
   */
  domainId: Client.WeaponAscensionMaterial["domainId"];
}

/**
 * @endpoints "[\"weaponEnhancementMaterial\",\"weaponEnhancementMaterials\",\"filterWeaponEnhancementMaterials\"]"
 * @note unimplemented
 */
export interface WeaponEnhancementMaterial
  extends Client.WeaponEnhancementMaterial,
    Defaults {
  /**
   * Name of the WeaponEnhancementMaterial
   *
   * @real-type String
   */
  name: Client.WeaponEnhancementMaterial["name"];
  /**
   * Description for the WeaponEnhancementMaterial
   *
   * @real-type String
   */
  description: Client.WeaponEnhancementMaterial["description"];
  /**
   * Icon URL of the WeaponEnhancementMaterial
   *
   * @real-type String
   */
  image: Client.WeaponEnhancementMaterial["image"];
  /**
   * Rarity of the WeaponEnhancementMaterial
   *
   * @real-type Number
   */
  rarity: Client.WeaponEnhancementMaterial["rarity"];
  /**
   * Sources where the WeaponEnhancementMaterial can be found
   *
   * @real-type JSON - TODO
   */
  source: Client.WeaponEnhancementMaterial["source"];
  /**
   * The recipe used to create the WeaponEnhancmentMaterial
   *
   * @real-type JSON - TODO
   */
  recipeUseId: Client.WeaponEnhancementMaterial["recipeUseId"];
}