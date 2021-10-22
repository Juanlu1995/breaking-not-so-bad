import { getCharacterQuotes, getCharacterRequest, getCharactersRequest } from './requests';
import { Action } from '../types';
import { ActionTypes } from '../ActionTypes';
import { Dispatch } from 'redux';
import { Character, CharacterInfo, Quote } from '../../types';

const action = (type: ActionTypes, payload: any): Action => ({ type, payload });

export const setCharacters = (characters: Character[]): Action =>
  action(ActionTypes.SET_CHARACTERS, characters);

export const setCharacterSelected = (character: CharacterInfo): Action =>
  action(ActionTypes.SET_CHARACTER, character);

export const getCharacters = () => async (dispatch: Dispatch) => {
  const characters: Character[] = await getCharactersRequest();
  return dispatch(setCharacters(characters));
};

export const getCharacterInfo = (id: number) => async (dispatch: Dispatch) => {
  let quotes: Quote[] = [] as Quote[];
  const character: Character = await getCharacterRequest(id);
  if (character) {
    quotes = await getCharacterQuotes(character.name);
  }
  return dispatch(setCharacterSelected({ ...character, quotes: quotes }));
};
