import React from 'react';
import { useParams } from 'react-router-dom';

interface ParamsProps {
  id?: string;
}

const CharacterDetail = (): JSX.Element => {
  const { id } = useParams<ParamsProps>();

  return <h1>character {id}</h1>;
};

export default CharacterDetail;
