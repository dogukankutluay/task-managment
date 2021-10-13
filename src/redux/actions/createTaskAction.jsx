import axios from 'axios';
import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
import { getToken } from '../getToken';
import { getAllTasks } from './getAllTasksAction';
import { myDepartmentTasks } from './myDepartmantTasksAction';
import { myTasks } from './myTasksAction';
export const createTask = body => dispatch => {
  axios
    .post(`${BaseUrl}${ApiConfig.task.createTask}`, body, getToken())
    .then(res => {
      dispatch(getAllTasks());
      dispatch(myDepartmentTasks());
      dispatch(myTasks());
    })
    .catch(err => {
      console.log(err.response);
    });
};
