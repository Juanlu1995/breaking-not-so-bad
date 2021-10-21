import { ActionTypes } from './ActionTypes';
import rootReducer from './reducers';

interface Character {
  readonly id: integer;
  readonly name: string;
  readonly birthday: string;
  readonly occupation: string[];
  readonly img: string;
  readonly status: string;
  readonly nickname: string;
  readonly appearance: number[];
  readonly portrayed: string;
  readonly category: string[];
}

interface Action {
  readonly type: ActionTypes;
  readonly payload?: any;
}

type RootState = ReturnType<typeof rootReducer>;

export type { RootState, Character, Action };
