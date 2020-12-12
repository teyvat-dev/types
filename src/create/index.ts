import { Prisma } from "../types/client";

// Until this fixed https://github.com/microsoft/TypeScript/issues/13135
// types must be renamed manually

export type Artifact = Prisma.ArtifactCreateInput;
export type ArtifactSet = Prisma.ArtifactSetCreateInput;
export type Character = Prisma.CharacterCreateInput;
export type CharacterAscension = Prisma.CharacterAscensionCreateInput; //
export type CharacterAscensionMaterial = Prisma.CharacterAscensionMaterialCreateInput;
export type CharacterProfile = Prisma.CharacterProfileCreateInput;
export type CommonAscensionMaterial = Prisma.CommonAscensionMaterialCreateInput;
export type CommonMaterial = Prisma.CommonMaterialCreateInput;
export type Consumeable = Prisma.ConsumeableCreateInput;
export type ConsumeableRecipe = Prisma.ConsumeableRecipeCreateInput;
export type CookingMaterial = Prisma.CookingMaterialCreateInput;
export type CraftingMaterial = Prisma.CraftingMaterialCreateInput;
export type Domain = Prisma.DomainCreateInput;
export type Element = Prisma.ElementCreateInput;
export type ForgeRecipe = Prisma.ForgeRecipeCreateInput;
export type ProcessRecipe = Prisma.ProcessRecipeCreateInput;
export type Region = Prisma.RegionCreateInput;
export type Talent = Prisma.TalentCreateInput;
export type TalentLevelUpMaterial = Prisma.TalentLevelUpMaterialCreateInput;
export type Weapon = Prisma.WeaponCreateInput;
export type WeaponAscension = Prisma.WeaponAscensionCreateInput;
export type WeaponAscensionMaterial = Prisma.WeaponAscensionMaterialCreateInput;
export type WeaponEnhancementMaterial = Prisma.WeaponEnhancementMaterialCreateInput;
