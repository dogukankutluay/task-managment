import axios from 'axios';
import {
  SET_CURRENT_USER,
  ERROR_LOGIN,
  CLEAR_AUTH,
  USER_LOGOUT,
  GET_ME,
} from '../type';
import { history } from '../../';

import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
import { getToken } from '../getToken';
export const loginUser =
  ({ email, setLoading }) =>
  dispatch => {
    axios
      .post(`${BaseUrl}${ApiConfig.user.login}`, { email })
      .then(res => {
        const token = res.data.payload.jwtToken;
        localStorage.setItem('jwtToken', token);
        dispatch(setCurrentUser(token));
        setTimeout(() => {
          setLoading(false);
          history.push('/');
          // history.go();
        }, 1000);
      })
      .catch(err => {
        setLoading(false);
        dispatch(errorLogin(err.response?.data.message));
      });
  };
export const getMe = () => dispatch => {
  axios
    .get(`${BaseUrl}${ApiConfig.user.getMe}`, getToken())
    .then(res => {
      const data = res.data.payload;
      dispatch(setCurrentMe(data));
    })
    .catch(err => {
      console.log(err);
    });
};
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
export const setCurrentMe = decoded => {
  return {
    type: GET_ME,
    payload: decoded,
  };
};

export const errorLogin = payload => {
  return {
    type: ERROR_LOGIN,
    payload: payload,
  };
};
export const clearAuth = payload => {
  return {
    type: CLEAR_AUTH,
    payload: payload,
  };
};
export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};
