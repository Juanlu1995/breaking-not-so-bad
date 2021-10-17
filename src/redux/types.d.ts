import { ActionTypes } from './ActionTypes';
import rootReducer from './reducers';

interface Character {
  id: string;
  name: string;
}

interface Action {
  readonly type: ActionTypes;
  readonly payload?: any;
}

type RootState = ReturnType<typeof rootReducer>;

export type { RootState, Character, Action };
