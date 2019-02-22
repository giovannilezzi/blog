import { connect } from 'react-redux';
import AppComponent from '../Components/AppComponent'

const mapStateToProps = (state) => {
    return {
        previewFileClicked: this.PreviewReducer.previewFileClicked
    }

};

//const mapDispatchToProps = (dispatch) => {}

const AppContainer = connect(
    mapStateToProps,
    null,
)(AppComponent);

export default AppContainer
