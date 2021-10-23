import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { CharacterInfo, Quote } from '../../types';
import { Button, Grid, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import {
  CharacterDetailInfo,
  CharacterDetailQuote,
  CharacterDetailWrapper,
  CharacterInfoBody,
  CharacterInfoHeader,
} from './CharacterDetailsStyledWrappers';

interface Props {
  character: CharacterInfo;
}

const CharacterDetails = ({ character }: Props): JSX.Element => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const randomQuoteNumber = useCallback(
    () => Math.floor(Math.random() * (character.quotes?.length || 0)),
    [character.quotes?.length],
  );
  const initialQuote: number | undefined = useMemo(
    () => (character.quotes && character.quotes?.length > 0 ? randomQuoteNumber() : undefined),
    [character.quotes?.length],
  );
  const [quote, setQuote] = useState<Quote | undefined>(
    !!initialQuote && !!character.quotes ? character.quotes[initialQuote] : undefined,
  );
  const onChangeQuote = () => {
    if (character.quotes) {
      setQuote(character.quotes[randomQuoteNumber()]);
    }
  };

  useEffect(() => {
    if (character.quotes) {
      setQuote(character.quotes[randomQuoteNumber()]);
    }
  }, [character.quotes]);

  return (
    <>
      <CharacterDetailWrapper container spacing={2}>
        <Grid item xs={3}>
          <img src={character.img} alt={character.name} />
        </Grid>
        <Grid item xs={8}>
          <div>
            <CharacterInfoHeader>
              <Typography
                gutterBottom
                variant="h1"
                component="div"
                color={theme => theme.palette.primary.dark}
              >
                {' '}
                {character.name}
              </Typography>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                color={theme => theme.palette.secondary.main}
              >
                {' '}
                {character.nickname}
              </Typography>
            </CharacterInfoHeader>
            <CharacterInfoBody>
              <ul>
                <CharacterDetailInfo>
                  Portrayed by:
                  <span className={'data'}>{character.portrayed}</span>
                </CharacterDetailInfo>
                <CharacterDetailInfo>
                  Status:
                  <span className={'data'}>{character.status}</span>
                </CharacterDetailInfo>
                <CharacterDetailInfo>
                  Occupation:
                  <span className={'data'}>{character.occupation.join(', ')}</span>
                </CharacterDetailInfo>
                <CharacterDetailInfo>
                  Category:
                  <span className={'data'}>{character.category}</span>
                </CharacterDetailInfo>
                {character.birthday && (
                  <CharacterDetailInfo>
                    Birthday:
                    <span className={'data'}>{character.birthday}</span>
                  </CharacterDetailInfo>
                )}
                <CharacterDetailInfo>
                  Appears in seasons:
                  <span className={'data'}>{character.appearance?.join(', ')}</span>
                </CharacterDetailInfo>
                <CharacterDetailQuote>
                  <div>
                    <Typography variant={'body1'} gutterBottom component={'p'} paragraph={true}>
                      {quote?.quote}
                    </Typography>
                  </div>
                  <div>
                    <Button onClick={onChangeQuote} variant={'contained'}>
                      Change quote
                    </Button>
                  </div>
                </CharacterDetailQuote>
              </ul>
            </CharacterInfoBody>
          </div>
        </Grid>
      </CharacterDetailWrapper>
      <Button onClick={goBack}>Back</Button>
    </>
  );
};

export default CharacterDetails;
