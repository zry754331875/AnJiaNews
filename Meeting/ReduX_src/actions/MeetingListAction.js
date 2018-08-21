import * as MeetingListTypes from '../constants/MeetingListTypes';
import { createAction } from "redux-actions";
import { call,put,take } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

const API_CLIST = '/zhyl/Home/Index/clist';
export function getMeetingList(pageIndex,typeIndex,cid){
    return async dispatch=>{
        
        dispatch(createAction(MeetingListTypes.FETCH_LIST_START)({typeIndex,pageIndex}))
        
        try {
          let response = await fetch(global.server + API_CLIST,{
            method:'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:'ctype=0&cid='+cid+'&user_id=0&page=' + pageIndex
          })

          let json = await response.json()

          console.log(json)

          let newData = json.data.news;

          dispatch(createAction(MeetingListTypes.FETCH_LIST_SUCCESS)({datas:newData,typeIndex,pageIndex}))
        } catch (error) {
          console.error(error)

          dispatch(createAction(MeetingListTypes.FETCH_LIST_ERROR)({error,typeIndex,pageIndex}))
        }
    }
}