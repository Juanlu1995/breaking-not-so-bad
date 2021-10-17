import { ActionTypes } from './ActionTypes';

interface RootState {
  characters: Character[];
}

interface Character {
  id: string;
  name: string;
}

interface Action {
  readonly type: ActionTypes;
  readonly payload?: any;
}

export type { RootState, Character, Action };
