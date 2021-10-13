import { RENT_TAB_CHANGE } from '../type';

export const changeRent = payload => {
  return {
    type: RENT_TAB_CHANGE,
    payload: payload,
  };
};
