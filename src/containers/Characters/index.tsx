import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../redux/actions';
import { RootState } from '../../redux/types';
import { createStructuredSelector } from 'reselect';
import { makeSelectCharacters } from '../../redux/selectors';
import { Character } from '../../types';
import CharacterCard from '../../components/CharacterCard';
import styled from 'styled-components';

interface SelectorProps {
  characters: Character[];
}

const estructureSelector = createStructuredSelector<RootState, SelectorProps>({
  characters: makeSelectCharacters(),
});

const CharactersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Characters = (): JSX.Element => {
  const dispatch = useDispatch();
  const { characters } = useSelector(estructureSelector);
  console.log(characters);
  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <CharactersWrapper>
      {characters.map((character: Character) => (
        <CharacterCard character={character} />
      ))}
    </CharactersWrapper>
  );
};

export default Characters;
