import axios from 'axios';
import { getToken } from '../getToken';
import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
import { SPLICE_ONE_TASK } from '../type';
import { getAllTasks } from './getAllTasksAction';
import { myTasks } from './myTasksAction';
import { myDepartmentTasks } from './myDepartmantTasksAction';
import { alertPopup } from './popupsAction';

export const deleteTask = (id, popupCloseClick) => dispatch => {
  axios
    .delete(`${BaseUrl}${ApiConfig.task.deleteTask}/${id}`, getToken())
    .then(res => {
      if (res.data.code === 'taskDeleted') {
        popupCloseClick();
        dispatch(getAllTasks());
        dispatch(myDepartmentTasks());
        dispatch(myTasks());
        dispatch(
          alertPopup({
            type: 'success',
            text: {
              tr: 'Görev başarılı bir şekilde silindi.',
              en: 'Task deleted successfully',
            },
            show: true,
          })
        );
      }
    })
    .catch(err => {
      dispatch(
        alertPopup({
          type: 'error',
          text: {
            tr: 'İşlem Başarısız.',
            en: 'Operation failed.',
          },
          show: true,
        })
      );
    });
};
export const spliceOneTask = decoded => {
  return {
    type: SPLICE_ONE_TASK,
    payload: decoded,
  };
};
