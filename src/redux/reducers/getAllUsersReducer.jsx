import { SET_CURRENT_ALL_USER } from '../type';

const initalState = {
  data: [],
};

const getAllUsers = (state = initalState, action) => {
  switch (action.type) {
    case SET_CURRENT_ALL_USER:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

export default getAllUsers;
