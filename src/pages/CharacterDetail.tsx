import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterInfo } from '../redux/actions';
import { CharacterInfo, Quote } from '../types';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../redux/types';
import { makeSelectSelectedCharacter } from '../redux/selectors';
import { Button, Typography } from '@mui/material';
import styled from 'styled-components';

interface ParamsProps {
  id?: string;
}

interface SelectorProps {
  character: CharacterInfo;
}

const structureSelector = createStructuredSelector<RootState, SelectorProps>({
  character: makeSelectSelectedCharacter(),
});

const CharacterDetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  margin: 5rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  column-gap: 2rem;

  * {
    margin: 1rem;
  }

  img {
    //margin: 1rem;
    width: 100%;
  }
`;

const CharacterInfoHeader = styled.div`
  display: flex;
  align-items: center;
  align-self: start;
`;
const CharacterInfoBody = styled.div`
  display: flex;
  align-items: center;
  align-self: start;

  ul {
    list-style: none;
    width: 100%;

    li {
      margin: 1rem 0;

      * {
        margin: 1rem 0;
      }
    }
  }
`;

const CharacterDetailInfo = styled.li`
  font-weight: bold;
  display: grid;
  grid-template-columns: 20% auto;
  align-items: center;

  span.data {
    font-weight: normal;
  }
`;

const CharacterDetailQuote = styled(CharacterDetailInfo)`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  grid-template-columns: auto;

  div {
    padding: 0.5rem 1rem;
  }

  width: 100%;
`;
const CharacterDetail = (): JSX.Element => {
  const { character } = useSelector(structureSelector);
  const history = useHistory();
  const { id } = useParams<ParamsProps>();
  const dispatch = useDispatch();
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
    if (!!id && !isNaN(+id)) {
      dispatch(getCharacterInfo(parseInt(id)));
    }
  }, []);
  useEffect(() => {
    if (character.quotes) {
      setQuote(character.quotes[randomQuoteNumber()]);
    }
  }, [character.quotes]);
  // TODO put loading

  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <CharacterDetailWrapper>
        <img src={character.img} alt={character.name} />
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
              {character?.birthday && (
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
      </CharacterDetailWrapper>
      <Button onClick={goBack}>Back</Button>
    </>
  );
};

export default CharacterDetail;
