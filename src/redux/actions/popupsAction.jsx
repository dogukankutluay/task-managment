import {
  LOGOUT_POPUP,
  SIDEBAR_HAMBURGER,
  TASK_CARD_USER_PROFILE,
  TASK_CARD_DETAIL,
  TASK_CREATE,
} from '../type';

export const logoutPopup = payload => {
  return {
    type: LOGOUT_POPUP,
    payload: payload,
  };
};
export const sideBarHamburger = payload => {
  return {
    type: SIDEBAR_HAMBURGER,
    payload: payload,
  };
};
export const taskCardUserProfile = payload => {
  return {
    type: TASK_CARD_USER_PROFILE,
    payload: payload,
  };
};
export const taskCardDetail = payload => {
  return {
    type: TASK_CARD_DETAIL,
    payload: payload,
  };
};
export const taskCreate = payload => {
  return {
    type: TASK_CREATE,
    payload: payload,
  };
};
