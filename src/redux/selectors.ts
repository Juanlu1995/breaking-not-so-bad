import { createSelector } from 'reselect';
import { RootState } from './types';
import { AppState } from './reducers/types';
import { Character, CharacterInfo } from '../types';

const makeSelectAppState = (state: RootState): AppState => state.App;

export const makeSelectCharacters = () =>
  createSelector(makeSelectAppState, (appRootState): Character[] => appRootState.characters);
export const makeSelectSelectedCharacter = () =>
  createSelector(
    makeSelectAppState,
    (appRootState): CharacterInfo => appRootState.selectedCharacter,
  );
