import { CHANGE_LANGUAGE } from '../type';

export const languageAction = payload => {
  return {
    type: CHANGE_LANGUAGE,
    payload: payload,
  };
};
