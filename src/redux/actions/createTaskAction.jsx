import axios from 'axios';
import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
import { getToken } from '../getToken';
import { getAllTasks } from './getAllTasksAction';
import { myDepartmentTasks } from './myDepartmantTasksAction';
import { myTasks } from './myTasksAction';
export const createTask =
  (body, alertPopup, errorAlertInitialState, popupCloseClick) => dispatch => {
    axios
      .post(`${BaseUrl}${ApiConfig.task.createTask}`, body, getToken())
      .then(res => {
        dispatch(
          alertPopup({
            type: 'success',
            text: {
              tr: 'Görev oluşturuldu.',
              en: 'The task has been created.',
            },
            show: true,
          })
        );
        setTimeout(() => {
          popupCloseClick();
        }, 1000);
        dispatch(getAllTasks());
        dispatch(myDepartmentTasks());
        dispatch(myTasks());
      })
      .catch(err => {
        dispatch(alertPopup(errorAlertInitialState));
      });
  };
