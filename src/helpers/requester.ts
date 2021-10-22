import { GenericObject } from '../types';

export const buildFetch = (
  uri: string,
  options?: RequestInit,
  body?: GenericObject,
): Promise<Response> => {
  const optionsCreated: RequestInit = {
    method: options?.method || 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: options?.mode || 'cors', // no-cors, *cors, same-origin
    cache: options?.cache || 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: options?.credentials || 'same-origin', // include, *same-origin, omit
    headers: options?.headers || {
      'Content-Type': 'application/json', // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: options?.redirect || 'follow', // manual, *follow, error
    referrerPolicy: options?.referrerPolicy || 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: body ? JSON.stringify(body) : null,
  };
  return fetch(`${process.env.REACT_APP_BASE_API}${uri}`, optionsCreated);
};
