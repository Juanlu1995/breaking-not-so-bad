import React, { useEffect } from 'react';
import { Character, RootState } from '../redux/types';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCharacters } from '../redux/selectors';
import { getCharacters } from '../redux/actions';

interface SelectorProps {
  characters: Character[];
}

const estructureSelector = createStructuredSelector<RootState, SelectorProps>({
  characters: makeSelectCharacters(),
});

const Main = (): JSX.Element => {
  const dispatch = useDispatch();
  const { characters } = useSelector(estructureSelector);
  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  return <>{characters}</>;
};

export default Main;
