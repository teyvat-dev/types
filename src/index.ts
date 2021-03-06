export {
  Artifact,
  ArtifactSet,
  Character,
  CharacterAscension,
  CharacterAscensionMaterial,
  CharacterProfile,
  CommonAscensionMaterial,
  CommonMaterial,
  Consumeable,
  ConsumeableRecipe,
  CookingMaterial,
  CraftingMaterial,
  Domain,
  Element,
  ForgeRecipe,
  ProcessRecipe,
  Region,
  Talent,
  TalentLevelUpMaterial,
  User as Me,
  Weapon,
  WeaponAscension,
  WeaponAscensionMaterial,
  WeaponEnhancementMaterial,
} from "./types/client";

export * as Create from "./create";

export * as Args from './args';

export interface AuthPayload {
  token: string;
}

export interface InfoPayload {
  [key: string]: string | undefined;
  error?: string;
  info?: string;
  message?: string;
  resolution?: string;
}
