import { combineReducers } from "redux";
import MeetingListReducer from "./MeetingListReducer";
import MeetingContentReducer from "./MeetingContentReducer";

export default rootReducers = combineReducers({
    MeetingList:MeetingListReducer,
    MeetingContentReducer:MeetingContentReducer,
})