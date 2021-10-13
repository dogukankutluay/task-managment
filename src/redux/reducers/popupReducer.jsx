import {
  LOGOUT_POPUP,
  SIDEBAR_HAMBURGER,
  TASK_CARD_USER_PROFILE,
  TASK_CARD_DETAIL,
  TASK_CREATE,
} from './../type';
const initialState = {
  logout: false,
  sidebarHamburger: false,
  taskCardUserProfile: { popup: false, items: {} },
  taskCardDetail: { popup: false, id: '' },
  taskCreate: false,
};
const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_POPUP:
      return {
        ...state,
        logout: action.payload,
      };
    case SIDEBAR_HAMBURGER:
      return {
        ...state,
        sidebarHamburger: action.payload,
      };
    case TASK_CARD_USER_PROFILE:
      return {
        ...state,
        taskCardUserProfile: action.payload,
      };
    case TASK_CARD_DETAIL:
      return {
        ...state,
        taskCardDetail: action.payload,
      };
    case TASK_CREATE:
      return {
        ...state,
        taskCreate: action.payload,
      };

    default:
      return state;
  }
};
export default popupReducer;
