import { getCharactersRequest } from './requests';
import { Action, Character } from '../types';
import { ActionTypes } from '../ActionTypes';

const action = (type: ActionTypes, payload: any): Action => ({ type, payload });

export const setCharacters = (characters: Character[]): Action =>
  action(ActionTypes.SET_CHARACTERS, characters);
export const getCharacters = () => setCharacters(getCharactersRequest());
