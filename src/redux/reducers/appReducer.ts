import { Action } from '../types';
import { AppState } from './types';
import { ActionTypes } from '../ActionTypes';

const initialState: AppState = {
  characters: [],
};

const appReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    default:
      return { ...state };
  }
};

export default appReducer;
