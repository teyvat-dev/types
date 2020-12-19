import { Prisma } from "./types/client";

// Until this fixed https://github.com/microsoft/TypeScript/issues/13135
// types must be renamed manually

type PickableAggregateArgs = "take" | "skip";

export type Artifact = Prisma.ArtifactArgs & Prisma.ArtifactWhereUniqueInput;
export type Artifacts = Prisma.ArtifactArgs &
  Pick<Prisma.AggregateArtifactArgs, PickableAggregateArgs>;

export type ArtifactSet = Prisma.ArtifactSetArgs &
  Prisma.ArtifactSetWhereUniqueInput;
export type ArtifactSets = Prisma.ArtifactSetArgs &
  Pick<Prisma.AggregateArtifactSetArgs, PickableAggregateArgs>;

export type Character = Prisma.CharacterArgs & Prisma.CharacterWhereUniqueInput;
export type Characters = Prisma.CharacterArgs &
  Pick<Prisma.AggregateCharacterArgs, PickableAggregateArgs>;

export type CharacterAscension = Prisma.CharacterAscensionArgs &
  Prisma.CharacterAscensionWhereUniqueInput;
export type CharacterAscensions = Prisma.CharacterAscensionArgs &
  Pick<Prisma.AggregateCharacterAscensionArgs, PickableAggregateArgs>;

export type CharacterAscensionMaterial = Prisma.CharacterAscensionMaterialArgs &
  Prisma.CharacterAscensionWhereUniqueInput;
export type CharacterAscensionMaterials = Prisma.CharacterAscensionArgs &
  Pick<Prisma.AggregateCharacterAscensionMaterialArgs, PickableAggregateArgs>;

export type CharacterProfile = Prisma.CharacterProfileArgs &
  Prisma.CharacterProfileWhereUniqueInput;
export type CharacterProfiles = Prisma.CharacterProfileArgs &
  Pick<Prisma.AggregateCharacterProfileArgs, PickableAggregateArgs>;

export type CommonAscensionMaterial = Prisma.CommonAscensionMaterialArgs &
  Prisma.CommonAscensionMaterialWhereUniqueInput;
export type CommonAssensionMaterials = Prisma.CommonAscensionMaterialArgs &
  Pick<Prisma.AggregateCommonAscensionMaterialArgs, PickableAggregateArgs>;

export type CommonMaterial = Prisma.CommonMaterialArgs &
  Prisma.CommonMaterialWhereUniqueInput;
export type CommonMaterials = Prisma.CommonMaterialArgs &
  Pick<Prisma.AggregateCommonMaterialArgs, PickableAggregateArgs>;

export type Consumeable = Prisma.ConsumeableArgs &
  Prisma.ConsumeableWhereUniqueInput;
export type Consumeables = Prisma.ConsumeableArgs &
  Pick<Prisma.AggregateConsumeableArgs, PickableAggregateArgs>;

export type ConsumeableRecipe = Prisma.ConsumeableRecipeArgs &
  Prisma.ConsumeableRecipeWhereUniqueInput;
export type ConsumeableRecipes = Prisma.ConsumeableArgs &
  Pick<Prisma.AggregateConsumeableRecipeArgs, PickableAggregateArgs>;

export type CookingMaterial = Prisma.CookingMaterialArgs &
  Prisma.CookingMaterialWhereUniqueInput;
export type CookingMaterials = Prisma.CookingMaterialArgs &
  Pick<Prisma.AggregateCookingMaterialArgs, PickableAggregateArgs>;

export type CraftingMaterial = Prisma.CraftingMaterialArgs &
  Prisma.CraftingMaterialWhereUniqueInput;
export type CraftingMaterials = Prisma.CraftingMaterialArgs &
  Pick<Prisma.AggregateCraftingMaterialArgs, PickableAggregateArgs>;

export type Domain = Prisma.DomainArgs & Prisma.DomainWhereUniqueInput;
export type Domains = Prisma.DomainArgs &
  Pick<Prisma.AggregateDomainArgs, PickableAggregateArgs>;

export type Element = Prisma.ElementArgs & Prisma.ElementWhereUniqueInput;
export type Elements = Prisma.ElementArgs &
  Pick<Prisma.AggregateElementArgs, PickableAggregateArgs>;

export type ForgeRecipe = Prisma.ForgeRecipeArgs &
  Prisma.ForgeRecipeWhereUniqueInput;
export type ForgeRecipes = Prisma.ForgeRecipeArgs &
  Pick<Prisma.AggregateForgeRecipeArgs, PickableAggregateArgs>;

export type ProcessRecipe = Prisma.ProcessRecipeArgs &
  Prisma.ProcessRecipeWhereUniqueInput;
export type ProcessRecipes = Prisma.ProcessRecipeArgs &
  Pick<Prisma.AggregateProcessRecipeArgs, PickableAggregateArgs>;

export type Region = Prisma.RegionArgs & Prisma.RegionWhereUniqueInput;
export type Regions = Prisma.RegionArgs &
  Pick<Prisma.AggregateRegionArgs, PickableAggregateArgs>;

export type Talent = Prisma.TalentArgs & Prisma.TalentWhereUniqueInput;
export type Talents = Prisma.TalentArgs &
  Pick<Prisma.AggregateTalentArgs, PickableAggregateArgs>;

export type TalentLevelUpMaterial = Prisma.TalentLevelUpMaterialArgs &
  Prisma.TalentLevelUpMaterialWhereUniqueInput;
export type TalentLevelUpMaterials = Prisma.TalentLevelUpMaterialArgs &
  Pick<Prisma.AggregateTalentLevelUpMaterialArgs, PickableAggregateArgs>;

export type Weapon = Prisma.WeaponArgs & Prisma.WeaponWhereUniqueInput;
export type Weapons = Prisma.WeaponArgs &
  Pick<Prisma.AggregateWeaponArgs, PickableAggregateArgs>;

export type WeaponAscension = Prisma.WeaponAscensionArgs &
  Prisma.WeaponAscensionWhereUniqueInput;
export type WeaponAscensions = Prisma.WeaponAscensionArgs &
  Pick<Prisma.AggregateWeaponAscensionArgs, PickableAggregateArgs>;

export type WeaponAscensionMaterial = Prisma.WeaponAscensionMaterialArgs &
  Prisma.WeaponAscensionMaterialWhereUniqueInput;
export type WeaponAscensionMaterials = Prisma.WeaponAscensionMaterialArgs &
  Pick<Prisma.AggregateWeaponAscensionMaterialArgs, PickableAggregateArgs>;

export type WeaponEnhancementMaterial = Prisma.WeaponEnhancementMaterialArgs &
  Prisma.WeaponAscensionMaterialWhereUniqueInput;
export type WeaponEnhancementMaterials = Prisma.WeaponEnhancementMaterialArgs &
  Pick<Prisma.AggregateWeaponEnhancementMaterialArgs, PickableAggregateArgs>;
