import { connect } from 'react-redux';
import * as actions from '../Actions/AllPostsAction';
import AllPostComponent from "../Components/AllPostComponent";

const mapStateToProps = (state) => {
    return {
        posts: state.PostReducer.posts,
        isLoading: state.PostReducer.isLoading,
        allPostLoaded: state.PostReducer.allPostLoaded
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallGetAllPosts: () => {
            dispatch(actions.asyncCallGetAllPosts());
        },
        newPostClicked: () => {
            dispatch(actions.newPostClicked());
        }
    }
}

const AllPostContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AllPostComponent);

export default AllPostContainer
