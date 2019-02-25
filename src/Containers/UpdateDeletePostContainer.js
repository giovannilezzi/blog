import { connect } from 'react-redux';
import * as deletePostAction from '../Actions/DeletePostAction';
import * as editActions from '../Actions/EditAction';
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
        }
    }
}

const UpdateDeletePostContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UpdateDeletePostComponent);

export default UpdateDeletePostContainer
