import { createSelector } from 'reselect';
import { Character, RootState } from './types';
import { AppReducer } from './reducers/types';

const makeSelectAppRootState = (state: RootState): AppReducer => state.App;

export const makeSelectCharacters = createSelector(
  makeSelectAppRootState,
  (appRootState): Character[] => appRootState.characters,
);
