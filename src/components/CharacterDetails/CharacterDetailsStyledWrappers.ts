import styled from 'styled-components';
import { Grid } from '@mui/material';

export const CharacterDetailWrapper = styled(Grid)`
  //display: grid;
  //grid-template-columns: 25% 75%;
  margin: 5rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  //column-gap: 2rem;

  * {
    margin: 1rem;
  }

  img {
    //margin: 1rem;
    width: 100%;
  }
`;

export const CharacterInfoHeader = styled.div`
  display: flex;
  align-items: center;
  align-self: start;
`;

export const CharacterInfoBody = styled.div`
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

export const CharacterDetailInfo = styled.li`
  font-weight: bold;
  display: grid;
  grid-template-columns: 20% auto;
  align-items: center;

  span.data {
    font-weight: normal;
  }
`;

export const CharacterDetailQuote = styled(CharacterDetailInfo)`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  grid-template-columns: auto;

  div {
    padding: 0.5rem 1rem;
  }

  width: 100%;
`;
