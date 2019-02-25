import { connect } from 'react-redux';
import AppComponent from '../Components/AppComponent'

const mapStateToProps = (state) => {
    return {
        previewFileClicked: state.PreviewReducer.previewFileClicked,
        editFileClicked: state.PreviewReducer.editFileClicked,
        post: state.PreviewReducer.post
    }
};

//const mapDispatchToProps = (dispatch) => {}

const AppContainer = connect(
    mapStateToProps,
    null,
)(AppComponent);

export default AppContainer
