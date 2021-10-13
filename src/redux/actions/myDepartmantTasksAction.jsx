import axios from 'axios';
import { SET_CURRENT_MY_DEPARTMENT_TASKS } from '../type';
import { getToken } from '../getToken';
import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
export const myDepartmentTasks = () => dispatch => {
  axios
    .get(`${BaseUrl}${ApiConfig.task.myDepartmentTasks}`, getToken())
    .then(res => {
      const data = res.data.payload;
      dispatch(setCurrentMyDepartmentTasks(data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const setCurrentMyDepartmentTasks = payload => {
  return {
    type: SET_CURRENT_MY_DEPARTMENT_TASKS,
    payload: payload,
  };
};
