import {
  LOGOUT_POPUP,
  SIDEBAR_HAMBURGER,
  TASK_CARD_USER_PROFILE,
  TASK_CARD_DETAIL,
  TASK_CREATE,
  CLEAR_ALL_POPUP,
  ALERT_POPUP,
} from './../type';
const initialState = {
  logout: false,
  sidebarHamburger: false,
  taskCardUserProfile: { popup: false, items: {} },
  taskCardDetail: { popup: false, id: '' },
  taskCreate: false,
  alert: { type: '', text: { tr: '', en: '' }, show: false },
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
    case ALERT_POPUP:
      return {
        ...state,
        alert: action.payload,
      };
    case CLEAR_ALL_POPUP:
      return {
        ...state,
        logout: false,
        taskCardUserProfile: { popup: false, items: {} },
        taskCardDetail: { popup: false, id: '' },
        taskCreate: false,
      };

    default:
      return state;
  }
};
export default popupReducer;
