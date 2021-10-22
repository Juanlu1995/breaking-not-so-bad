import React from 'react';
import { Character } from '../../types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface CharacterCardProps {
  character: Character;
}

const CardWrapper = styled(Card)`
  width: 25rem;
  margin: 2rem;

  :hover {
    transition-duration: 200ms;
    transform: scale3d(1.1, 1.1, 1);
    box-shadow: 1rem 1rem 1rem 1rem gray;
  }
`;

const CharacterCard = ({ character }: CharacterCardProps): JSX.Element => {
  return (
    <CardWrapper sx={{ maxWidth: 345 }}>
      <Link to={`/character/${character.id}`}>
        <CardMedia
          component="img"
          height="450rem"
          image={`${character.img}`}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <ul>
            <li key={`${character.id}_nickname`}>
              <Typography variant="body1" color="text.primary">
                Nickname
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character.nickname}
              </Typography>
            </li>
            <li key={`${character.id}_portrayed`}>
              <Typography variant="body1" color="text.primary">
                Portrayed
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character.portrayed}
              </Typography>
            </li>
          </ul>
        </CardContent>
      </Link>
    </CardWrapper>
  );
};

export default React.memo(CharacterCard);
