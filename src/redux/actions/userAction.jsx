import { USER_LOG } from '../type';
import { USER_FAIL, USER_LOGOUT } from './../type';

export const login = payload => {
  return {
    type: USER_LOG,
    payload: payload,
  };
};
export const logfail = payload => {
  return { type: USER_FAIL, payload: payload };
};
export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};
