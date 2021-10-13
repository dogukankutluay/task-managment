import {
  SET_CURRENT_ALL_TASKS,
  ERROR_ALL_TASKS,
  SPLICE_ONE_TASK,
  FILTER_ALL_TASKS,
  SEARCH_TASK,
} from '../type';

const initalState = {
  loading: true,
  data: [],
  searchDatas: [],
  constData: [],
};

const getAllTasksReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_CURRENT_ALL_TASKS:
      return {
        loading: false,
        data: action.payload,
        constData: action.payload,
      };
    case ERROR_ALL_TASKS:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case SPLICE_ONE_TASK:
      return {
        ...state,
        loading: false,
        data: state.data.filter(task => task.id !== action.payload),
      };
    case SEARCH_TASK:
      return {
        ...state,
        loading: false,
        data: state.data.filter(task => {
          const taskUpper = task.title.toUpperCase();
          const valueUpper = action.payload.toUpperCase();
          return taskUpper.includes(valueUpper);
        }),
      };
    case FILTER_ALL_TASKS:
      for (var key in action.payload) {
        if (action.payload[key] === -1) {
          delete action.payload[key];
        }
      }
      return {
        ...state,
        data: state.constData.filter(function (item) {
          for (var key in action.payload) {
            if (item[key] === -1 || item[key] !== action.payload[key])
              return false;
          }
          return true;
        }),
      };

    default:
      return state;
  }
};

export default getAllTasksReducer;
