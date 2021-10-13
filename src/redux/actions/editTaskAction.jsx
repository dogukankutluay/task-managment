import axios from 'axios';
import { getToken } from '../getToken';
import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
import { getAllTasks } from './getAllTasksAction';
import { getOneTask } from './getOneTaskAction';
import { myDepartmentTasks } from './myDepartmantTasksAction';
import { myTasks } from './myTasksAction';
import { alertPopup } from './popupsAction';

export const editTask = (id, body) => dispatch => {
  axios
    .put(`${BaseUrl}${ApiConfig.task.editTask}/${id}`, body, getToken())
    .then(res => {
      if (res.data.code === 'taskUpdated') {
        dispatch(getAllTasks());
        dispatch(myTasks());
        dispatch(myDepartmentTasks());
        dispatch(getOneTask(id));
        dispatch(
          alertPopup({
            type: 'success',
            text: {
              tr: 'Görev başarıyla güncellendi.',
              en: 'Task successfully edited.',
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
