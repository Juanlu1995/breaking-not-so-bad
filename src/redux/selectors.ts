import { createSelector } from 'reselect';
import { Character, RootState } from './types';
import { AppState } from './reducers/types';

const makeSelectAppState = (state: RootState): AppState => state.App;

export const makeSelectCharacters = () =>
  createSelector(makeSelectAppState, (appRootState): Character[] => appRootState.characters);
