import { SET_CURRENT_MY_DEPARTMENT_TASKS } from '../type';

const initalState = {
  data: null,
};

const getMyDepartmentTasks = (state = initalState, action) => {
  switch (action.type) {
    case SET_CURRENT_MY_DEPARTMENT_TASKS:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

export default getMyDepartmentTasks;
