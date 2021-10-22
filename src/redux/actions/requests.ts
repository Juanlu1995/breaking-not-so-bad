import { buildFetch } from '../../helpers/requester';
import { Character } from '../../types';

export const getCharactersRequest = (): Promise<Character[]> => {
  return buildFetch('/characters/')
    .then((response: Response) => {
      //TODO handle error
      if (response.ok) {
        return response.json();
      }
    })
    .then((data: any) => {
      const characters: Character[] = data.map(
        (c: any): Character => ({
          id: c?.char_id,
          appearance: c?.appearance,
          img: c?.img,
          birthday: c?.birthday,
          name: c?.name,
          category: c?.category,
          nickname: c?.nickname,
          occupation: c?.occupation,
          portrayed: c?.portrayed,
          status: c?.status,
        }),
      );
      return characters.length > 0 ? characters : ([] as Character[]);
    });
};
