import { connect } from 'react-redux';
import * as actions from '../Actions/PostAction';
import PostComponent from '../Components/PostComponent'

const mapStateToProps = (state) => {
    return {
        response: state.PostReducer.response,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (requestBody) => {
            dispatch(actions.handleSubmit(requestBody))
        }
    }
}

const PostContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PostComponent);

export default PostContainer
