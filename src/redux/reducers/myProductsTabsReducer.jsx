import { TABS_CHANGE } from './../type';
const initialState = {
  activeTab: 'details',
};
const myProductsTabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TABS_CHANGE:
      return {
        activeTab: action.payload,
      };

    default:
      return state;
  }
};
export default myProductsTabsReducer;
