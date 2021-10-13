import { SET_CURRENT_ONE_TASK } from '../type';

const initalState = {
  data: null,
};

const getOneTask = (state = initalState, action) => {
  switch (action.type) {
    case SET_CURRENT_ONE_TASK:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

export default getOneTask;
