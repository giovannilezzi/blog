import { connect } from 'react-redux';
import * as deletePostAction from '../Actions/DeletePostAction';
import * as editActions from '../Actions/EditAction';
import * as viewPostAction from '../Actions/ViewPostAction';
import UpdateDeletePostComponent from '../Components/UpdateDeletePostComponent'

const mapStateToProps = (state) => {
    return {
        responseDeletePost: state.DeleteReducer.responseDeletePost
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (requestBody) => {
            dispatch(deletePostAction.deletePostAction(requestBody))
        },

        editPostClicked: (post) => {
            dispatch(editActions.editPostClicked(post))
        },
        viewPost: (post) => {
            dispatch(viewPostAction.viewPost(post))
        }
    }
}

const UpdateDeletePostContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UpdateDeletePostComponent);

export default UpdateDeletePostContainer
