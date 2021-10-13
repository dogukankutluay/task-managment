import { CHANGE_LANGUAGE } from '../type';

const initalState = {
  language: 'tr',
};

const languageReducer = (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
