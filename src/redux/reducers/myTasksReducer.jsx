import { SET_CURRENT_MY_ALLTASKS } from '../type';

const initalState = {
  data: null,
};

const getMyAllTasks = (state = initalState, action) => {
  switch (action.type) {
    case SET_CURRENT_MY_ALLTASKS:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

export default getMyAllTasks;
