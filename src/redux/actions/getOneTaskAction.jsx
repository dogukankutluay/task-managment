import axios from 'axios';
import { SET_CURRENT_ONE_TASK } from '../type';
import { getToken } from '../getToken';

import { ApiConfig, BaseUrl } from '../../constants/ApiConfig';
export const getOneTask = (id, setUpdateTask) => dispatch => {
  axios
    .get(`${BaseUrl}${ApiConfig.task.getOneTask}/${id}`, getToken())
    .then(res => {
      const data = res.data.payload;
      dispatch(setCurrentOneTask(data));
      setUpdateTask({
        description: data.description,
        title: data.title,
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};
export const setCurrentOneTask = decoded => {
  return {
    type: SET_CURRENT_ONE_TASK,
    payload: decoded,
  };
};
