import { TABS_CHANGE } from './../type';

export const tabsChange = payload => {
  return {
    type: TABS_CHANGE,
    payload: payload,
  };
};  
