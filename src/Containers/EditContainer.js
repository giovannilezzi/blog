import { connect } from 'react-redux';
import * as actions from '../Actions/EditAction';
import EditComponent from '../Components/EditComponent'

const mapStateToProps = (state) => {
    return {
        responseUpdatePost : state.EditReducer.responseUpdatePost
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleEdit: (requestBody) => {
            dispatch(actions.handleEdit(requestBody));
        },
        closeEditFile: () => {
            dispatch(actions.closeEditFile());
        }
    }
}

const EditContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditComponent);

export default EditContainer
