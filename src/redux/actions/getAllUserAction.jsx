import axios from 'axios';
import { SET_CURRENT_ALL_USER } from '../type';

import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
export const getAllUsers = () => dispatch => {
  axios
    .get(`${BaseUrl}${ApiConfig.user.getAllUsers}`)
    .then(res => {
      const data = res.data.payload;
      dispatch(setCurrentAllUsers(data));
    })
    .catch(err => {
      console.log(err);
    });
};
export const setCurrentAllUsers = decoded => {
  return {
    type: SET_CURRENT_ALL_USER,
    payload: decoded,
  };
};
