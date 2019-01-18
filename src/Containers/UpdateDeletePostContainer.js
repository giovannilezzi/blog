import { connect } from 'react-redux';
import * as actions from '../Actions/DeletePostAction';
import UpdateDeletePostComponent from '../Components/UpdateDeletePostComponent'

const mapStateToProps = (state) => {
    return {
        responseDeletePost: state.DeleteReducer.responseDeletePost
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (requestBody) => {
            dispatch(actions.deletePostAction(requestBody))
        }
    }
}

const UpdateDeletePostContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UpdateDeletePostComponent);

export default UpdateDeletePostContainer
