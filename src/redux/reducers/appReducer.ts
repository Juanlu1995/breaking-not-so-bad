import { Action } from '../types';
import { AppState } from './types';
import { ActionTypes } from '../ActionTypes';
import { CharacterInfo } from '../../types';

const initialState: AppState = {
  characters: [],
  selectedCharacter: {} as CharacterInfo,
};

const appReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    case ActionTypes.SET_CHARACTER:
      return {
        ...state,
        selectedCharacter: payload,
      };
    default:
      return { ...state };
  }
};

export default appReducer;
