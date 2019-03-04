import { connect } from 'react-redux';
import AppComponent from '../Components/AppComponent'
import * as actions from "../Actions/AllPostsAction";

const mapStateToProps = (state) => {
    return {
        previewFileClicked: state.PreviewReducer.previewFileClicked,
        editFileClicked: state.PreviewReducer.editFileClicked,
        post: state.PreviewReducer.post,
        viewPostClicked: state.PreviewReducer.viewPostClicked
    }
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

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppComponent);

export default AppContainer
