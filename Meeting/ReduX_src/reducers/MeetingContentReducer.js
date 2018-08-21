import { handleActions } from "redux-actions";
import * as MeetingContentTypes from "../constants/MeetingContentTypes";

const defaultState = {
    text:''
}
export default handleActions({
    [MeetingContentTypes.TEXTINPUT_CHANGE]:(state,action)=>{
        const text = action.payload

        return {
            ...state,
            text:text
        }
    }
},defaultState)