import { Character } from '../types';
import { buildFetch } from '../../helpers/requester';

export const getCharactersRequest = (): Promise<Character[]> => {
  return buildFetch('characters/')
    .then((response: Response) => {
      //TODO handle error
      if (response.ok) {
        return response.json();
      }
    })
    .then((data: any) => {
      return data.data as Character[];
    });
};
