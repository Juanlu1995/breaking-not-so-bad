import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterInfo } from '../types';
import { getCharacterInfo } from '../helpers/requests';
import CharacterDetails from '../components/CharacterDetails';
import { Loading } from '../components/Loading';

interface ParamsProps {
  id?: string;
}

const CharacterDetailPage = (): JSX.Element => {
  const [character, setCharacter] = useState<undefined | CharacterInfo>(undefined);
  const { id } = useParams<ParamsProps>();
  useEffect(() => {
    if (!!id && !isNaN(+id)) {
      getCharacterInfo(parseInt(id)).then((retrievedCharacter: CharacterInfo) =>
        setCharacter(retrievedCharacter),
      );
    }
  }, []);

  return character ? <CharacterDetails character={character} /> : <Loading />;
};

export default CharacterDetailPage;
