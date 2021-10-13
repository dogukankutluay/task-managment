import jwtDecode from 'jwt-decode';
import { USER_LOG, USER_FAIL, USER_LOGOUT } from './../type';
const initialState = {
  userInfo: {},
  auth: false,
  token: '',
  error: '',
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOG:
      var data = jwtDecode(action.payload);
      return {
        userInfo: { ...data },
        auth: true,
        token: action.payload,
        error: '',
      };

    case USER_FAIL:
      return {
        ...state,
        userInfo: {},
        auth: false,
        token: '',
        error: action.payload,
      };
      case USER_LOGOUT:
        return {
          ...state,
        userInfo: {},
        auth: false,
        token: '',
        error: "",
        }
    default:
      return state;
  }
};
export default userReducer;
