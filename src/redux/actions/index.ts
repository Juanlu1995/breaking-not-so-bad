import { getCharactersRequest } from './requests';
import { Action } from '../types';
import { ActionTypes } from '../ActionTypes';
import { Dispatch } from 'redux';
import { Character } from '../../types';

const action = (type: ActionTypes, payload: any): Action => ({ type, payload });

export const setCharacters = (characters: Character[]): Action =>
  action(ActionTypes.SET_CHARACTERS, characters);
export const getCharacters = () => async (dispatch: Dispatch) => {
  const characters: Character[] = await getCharactersRequest();
  return dispatch(setCharacters(characters));
};
