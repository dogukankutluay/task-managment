import {
  SET_CURRENT_USER,
  ERROR_LOGIN,
  CLEAR_AUTH,
  USER_LOGOUT,
} from '../type';

const initalState = {
  isAuthenticated: false,
  token: '',
  error: '',
};

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        error: '',
        isAuthenticated: true,
        token: action.payload,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        isAuthenticated: false,
        token: '',
        error: '',
      };
    case CLEAR_AUTH:
      return {
        ...state,
        error: '',
      };

    default:
      return state;
  }
};

export default authReducer;
