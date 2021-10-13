import {
  ERROR_ALL_TASKS,
  SET_CURRENT_ALL_TASKS,
  SEARCH_TASK,
  FILTER_ALL_TASKS,
} from './../type';
import axios from 'axios';
import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
import { getToken } from '../getToken';
export const getAllTasks = () => dispatch => {
  axios
    .get(`${BaseUrl}${ApiConfig.task.getAllTasks}`, getToken())
    .then(res => {
      const data = res.data.payload;
      dispatch(setCurrentAllTasks(data));
    })
    .catch(err => {
      dispatch(errorAllTasks(err.response?.data.message));
    });
};
export const setCurrentAllTasks = decoded => {
  return {
    type: SET_CURRENT_ALL_TASKS,
    payload: decoded,
  };
};

export const errorAllTasks = payload => {
  return {
    type: ERROR_ALL_TASKS,
    payload: payload,
  };
};
export const searchTask = payload => {
  return {
    type: SEARCH_TASK,
    payload: payload,
  };
};
export const filterAllTasks = payload => {
  return {
    type: FILTER_ALL_TASKS,
    payload: payload,
  };
};
