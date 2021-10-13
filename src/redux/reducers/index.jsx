import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import authReducer from './authReducer';
import popupReducer from './popupReducer';
import getAllTasksReducer from './getAllTasksReducer';
import getAllUsersReducer from './getAllUsersReducer';
import getOneTask from './getOneTaskReducer';
import getMyAllTasks from './myTasksReducer';
import getMyDepartmentTasks from './myDepartmentTasksReducer';
export default combineReducers({
  language: languageReducer,
  user: authReducer,
  popups: popupReducer,
  getAllTasks: getAllTasksReducer,
  getAllUsers: getAllUsersReducer,
  getOneTask: getOneTask,
  getMyAllTask: getMyAllTasks,
  getMyDepartmentTasks: getMyDepartmentTasks,
});
