import axios from 'axios';
import { getToken } from '../getToken';
import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
import { getAllTasks } from './getAllTasksAction';
import { myDepartmentTasks } from './myDepartmantTasksAction';
import { myTasks } from './myTasksAction';
import { alertPopup } from './popupsAction';
export const statusChange = (taskId, type) => dispatch => {
  axios
    .get(
      `${BaseUrl}${ApiConfig.task.statusChange}/${type}/${taskId}`,
      getToken()
    )
    .then(res => {
      dispatch(
        alertPopup({
          type: 'success',
          text: {
            tr: 'İşlem başarılı.',
            en: 'The operation is successful.',
          },
          show: true,
        })
      );
      dispatch(getAllTasks());
      dispatch(myDepartmentTasks());
      dispatch(myTasks());
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
