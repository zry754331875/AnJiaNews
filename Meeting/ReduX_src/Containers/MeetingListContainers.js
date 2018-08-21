import { connect } from "react-redux";
import { getMeetingList } from "../actions/MeetingListAction";
import { MeetingList } from "../../Controller/MeetingList";
const mapStateToProps = (state,ownProps)=>{

    let typeIndex = ownProps.typeIndex
  
    return {
      data:state.MeetingList[typeIndex].datas,
      refreshing:state.MeetingList[typeIndex].refreshing,
      pageIndex:state.MeetingList[typeIndex].currentPage
    }
  } 
  
  const mapDispatchToProps = (dispatch)=>{
    return {
      _getMeetingList:(num=1,typeIndex,cid)=>{dispatch(getMeetingList(num,typeIndex,cid))},
    }
  } 
  
 const MeetingListContainers = connect(mapStateToProps,mapDispatchToProps)(MeetingList)

 export default MeetingListContainers