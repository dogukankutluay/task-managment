import axios from 'axios';
import { SET_CURRENT_MY_ALLTASKS } from '../type';
import { getToken } from '../getToken';
import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
export const myTasks = () => dispatch => {
  axios
    .get(`${BaseUrl}${ApiConfig.task.myTasks}`, getToken())
    .then(res => {
      const data = res.data.payload;
      dispatch(setCurrentMyTasks(data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const setCurrentMyTasks = payload => {
  return {
    type: SET_CURRENT_MY_ALLTASKS,
    payload: payload,
  };
};
