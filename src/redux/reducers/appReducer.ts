import { Action } from '../types';
import { AppState } from './types';

const initialState: AppState = {
  characters: [],
};

const appReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default appReducer;
