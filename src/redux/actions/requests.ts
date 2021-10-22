import { buildFetch } from '../../helpers/requester';
import { Character, Quote } from '../../types';

export const getCharactersRequest = (): Promise<Character[]> => {
  return (
    buildFetch('/characters/')
      .then((response: Response) => {
        //TODO handle error
        if (response.ok) {
          return response.json();
        }
      })
      // Fixme this type
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
      })
  );
};
export const getCharacterRequest = (id: number): Promise<Character> => {
  return (
    buildFetch(`/characters/${id}`)
      .then((response: Response) => {
        //TODO handle error
        if (response.ok) {
          return response.json();
        }
      })
      // Fixme this type
      .then((data: any) => {
        if (!!data) {
          const character: any = data[0];
          return {
            id: character?.char_id,
            appearance: character?.appearance,
            img: character?.img,
            birthday: character?.birthday,
            name: character?.name,
            category: character?.category,
            nickname: character?.nickname,
            occupation: character?.occupation,
            portrayed: character?.portrayed,
            status: character?.status,
          };
        } else {
          return {} as Character;
        }
      })
  );
};

export const getCharacterQuotes = (characterName: string): Promise<Quote[]> => {
  const params = new URLSearchParams({ author: characterName });
  return buildFetch(`/quote?${params.toString()}`)
    .then((response: Response) => {
      //TODO handle error
      if (response.ok) {
        return response.json();
      }
    })
    .then((data: any) => {
      return data
        ? // Fixme this type
        data.map((q: any) => ({
          id: q?.quote_id,
          quote: q?.quote,
          author: q?.author,
          series: q?.series,
        }))
        : ([] as Quote[]);
    });
};
