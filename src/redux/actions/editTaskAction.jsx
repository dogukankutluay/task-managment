import axios from 'axios';
import { getToken } from '../getToken';
import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
import { getAllTasks } from './getAllTasksAction';
import { getOneTask } from './getOneTaskAction';
import { myDepartmentTasks } from './myDepartmantTasksAction';
import { myTasks } from './myTasksAction';
export const editTask = (id, body) => dispatch => {
  axios
    .put(`${BaseUrl}${ApiConfig.task.editTask}/${id}`, body, getToken())
    .then(res => {
      if (res.data.code === 'taskUpdated') {
        dispatch(getAllTasks());
        dispatch(myTasks());
        dispatch(myDepartmentTasks());
        dispatch(getOneTask(id));
      }
    })
    .catch(err => {
      console.log(err.response);
    });
};
