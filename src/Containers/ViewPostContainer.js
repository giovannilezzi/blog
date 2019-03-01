import { connect } from 'react-redux';
import * as actions from '../Actions/ViewPostAction';
import ViewPostComponent from "../Components/ViewPostComponent";

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeViewPost: () => {
            dispatch(actions.closeViewPost());
        }
    }
}

const ViewPostContainer = connect(
    null,
    mapDispatchToProps,
)(ViewPostComponent);

export default ViewPostContainer
