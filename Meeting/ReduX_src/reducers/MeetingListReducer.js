import { handleActions } from "redux-actions";
import * as MeetingListTypes from "../constants/MeetingListTypes";


const defaultStatus = [{
    datas:[],
    isFetch:false,
    isSuccess:false,
    error:null,
    refreshing:false,
    currentPage:1,
},{
    datas:[],
    isFetch:false,
    isSuccess:false,
    error:null,
    refreshing:false,
    currentPage:1,
},{
    datas:[],
    isFetch:false,
    isSuccess:false,
    error:null,
    refreshing:false,
    currentPage:1,
}]

export default handleActions({
    [MeetingListTypes.FETCH_LIST_START]:(state,action) => {

        const {typeIndex,pageIndex} = action.payload

        let singleState = {
            ...state[typeIndex],
            isFetch:true,
            refreshing:true,
            currentPage:pageIndex,
        }

        let newState = Object.assign([],state)

        newState[typeIndex] = singleState

        return newState
    },

    [MeetingListTypes.FETCH_LIST_SUCCESS]:(state,action) => {

        const {typeIndex,pageIndex} = action.payload

        let datas = pageIndex == 1 ? action.payload.datas : [...state[typeIndex].datas,...action.payload.datas]
        
        let singleState = {
            ...state[typeIndex],
            isFetch:false,
            isSuccess:true,
            datas:datas,
            refreshing:false,
            currentPage:pageIndex+1,
        }

        let newState = Object.assign([],state)

        newState[typeIndex] = singleState

        return newState
    },
    [MeetingListTypes.FETCH_LIST_ERROR]:(state,action) => {

        const {typeIndex,error} = action.payload

        let singleState = {
            ...state[typeIndex],
            isFetch:false,
            isSuccess:false,
            error:error,
            refreshing:false
        }

        let newState = Object.assign([],state)

        newState[typeIndex] = singleState

        return newState
    },
},defaultStatus)