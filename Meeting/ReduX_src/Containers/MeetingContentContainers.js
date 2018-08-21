import { connect } from "react-redux";
import { onTextInputChange } from "../actions/MeetingContentAction";
import { MeetingContent } from "../../Controller/MeetingContent";

const mapStateToProps = (state,ownProps)=>{
    
    return ownProps
}

const mapDispatchToProps = (dispatch)=>{
    return {
        _onTextInputChange:(text)=>{dispatch(onTextInputChange(text))}
    }
}

const MeetingContentContainers= connect(mapStateToProps,mapDispatchToProps)(MeetingContent);

export default MeetingContentContainers