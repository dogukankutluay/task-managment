import { RENT_TAB_CHANGE } from "../type";

const initialState={
    activeTab:0
}
const rentTabReducer=(state=initialState,action)=>{
    switch(action.type){
        case RENT_TAB_CHANGE:
            return {
                activeTab:action.payload,
            }
            default:
            return state;

    }
}
export default rentTabReducer;