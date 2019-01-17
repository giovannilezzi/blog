import { connect } from 'react-redux';
import * as actions from '../Actions/CommentAction';
import CommentComponent from "../Components/CommentComponent";

const mapStateToProps = (state) => {
    return {
        responseDeletePost: state.CommentReducer.responseCommentPost
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleComment: (requestBody) => {
            dispatch(actions.handleComment(requestBody))
        }
    }
}

const CommentContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CommentComponent);

export default CommentContainer
