import axios from 'axios';
import { getToken } from '../getToken';
import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
import { SPLICE_ONE_TASK } from '../type';
import { getAllTasks } from './getAllTasksAction';
import { myTasks } from './myTasksAction';
import { myDepartmentTasks } from './myDepartmantTasksAction';
export const deleteTask = (id, popupCloseClick) => dispatch => {
  axios
    .delete(`${BaseUrl}${ApiConfig.task.deleteTask}/${id}`, getToken())
    .then(res => {
      if (res.data.code === 'taskDeleted') {
        popupCloseClick();
        dispatch(getAllTasks());
        dispatch(myDepartmentTasks());
        dispatch(myTasks());
      }
    })
    .catch(err => {
      console.log(err.response);
    });
};
export const spliceOneTask = decoded => {
  return {
    type: SPLICE_ONE_TASK,
    payload: decoded,
  };
};
