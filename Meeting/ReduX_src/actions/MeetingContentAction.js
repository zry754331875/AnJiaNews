import { createAction } from "redux-actions";
import * as MeetingContentTypes from "../constants/MeetingContentTypes";

export function onTextInputChange(text){
    return (dispatch,getState)=>{
        
        dispatch(createAction(MeetingContentTypes.TEXTINPUT_CHANGE)(text))
    }
}