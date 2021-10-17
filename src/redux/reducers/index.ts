import { Action, RootState } from '../types';

const initialState: RootState = {
  characters: [],
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default rootReducer;
