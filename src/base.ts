export {
  Artifact,
  ArtifactSet,
  Character,
  CharacterAscension,
  CharacterAscensionMaterial,
  CommonAscensionMaterial,
  CommonMaterial,
  Consumeable,
  ConsumeableRecipe,
  CookingMaterial,
  CraftingMaterial,
  Domain,
  Element,
  ForgeRecipe,
  Gadget,
  ProcessRecipe,
  Region,
  Talent,
  TalentLevelUpMaterial,
  User as Me,
  Weapon,
  WeaponAscension,
  WeaponAscensionMaterial,
  WeaponEnhancementMaterial,
} from './types/client';

// Special Typed JSON exports
import type {
  Character as CharacterBase,
  CharacterProfile as CharacterProfileBase,
} from './types/client';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

interface CharacterProfileModified extends CharacterProfileBase {
  /**
   * JSON object containing the images of the character
   *
   * @real-type JSON
   */
  images: {
    /**
     * Portrait image of the Character
     *
     * @real-type String
     */
    portrait: string;
    /**
     * Card image of the Character
     *
     * @real-type String
     */
    card: string;
    /**
     * inGame image of the Character
     *
     * @real-type String
     */
    inGame: string;
  };
  /**
   * JSON object containing the characters stories
   *
   * @real-type JSON
   */
  story: {
    /**
     * Story with the Key being the name of the story
     *
     * @real-type String
     */
    [key: string]: string;
  };
  /**
   * JSON object containing voice actors for the character
   *
   * @real-type JSON
   */
  voiceActor: {
    /**
     * English Voice Actor
     *
     * @real-type String
     */
    en: string;
    /**
     * Japanese Voice Actor
     *
     * @real-type String
     */
    jp: string;
    /**
     * Korean Voice Actor
     *
     * @real-type String
     */
    kr: string;
    /**
     * Chinese Voice Actor
     *
     * @real-type String
     */
    cn: string;
  };
}

export type CharacterProfile = Expand<CharacterProfileModified>;
