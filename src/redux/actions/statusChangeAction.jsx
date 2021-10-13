import axios from 'axios';
import { getToken } from '../getToken';
import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
import { getAllTasks } from './getAllTasksAction';
import { myDepartmentTasks } from './myDepartmantTasksAction';
import { myTasks } from './myTasksAction';
export const statusChange = (taskId, type) => dispatch => {
  axios
    .get(
      `${BaseUrl}${ApiConfig.task.statusChange}/${type}/${taskId}`,
      getToken()
    )
    .then(res => {
      dispatch(getAllTasks());
      dispatch(myDepartmentTasks());
      dispatch(myTasks());
    })
    .catch(err => {
      console.log(err);
    });
};
