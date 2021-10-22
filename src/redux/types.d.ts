import { ActionTypes } from './ActionTypes';
import rootReducer from './reducers';

interface Action {
  readonly type: ActionTypes;
  readonly payload?: any;
}

type RootState = ReturnType<typeof rootReducer>;

export type { RootState, Action };
