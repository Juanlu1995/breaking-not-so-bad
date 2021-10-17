import { Action } from '../types';
import { AppReducer } from './types';

const initialState: AppReducer = {
  characters: [],
};

const appReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default appReducer;
