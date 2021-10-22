import { Character, CharacterInfo } from '../../types';

export interface AppState {
  characters: Character[];
  selectedCharacter: CharacterInfo;
}
