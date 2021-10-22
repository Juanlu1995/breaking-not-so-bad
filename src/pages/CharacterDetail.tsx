import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterInfo } from '../redux/actions';
import { CharacterInfo } from '../types';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../redux/types';
import { makeSelectSelectedCharacter } from '../redux/selectors';

interface ParamsProps {
  id?: string;
}

interface SelectorProps {
  characterInfo: CharacterInfo;
}

const structureSelector = createStructuredSelector<RootState, SelectorProps>({
  characterInfo: makeSelectSelectedCharacter(),
});
const CharacterDetail = (): JSX.Element => {
  const { characterInfo } = useSelector(structureSelector);
  console.log(characterInfo);
  const { id } = useParams<ParamsProps>();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!!id && !isNaN(+id)) {
      dispatch(getCharacterInfo(parseInt(id)));
    }
  }, []);
  return <h1>character {id}</h1>;
};

export default CharacterDetail;
