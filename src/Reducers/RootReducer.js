import { combineReducers } from 'redux';
import PostReducer from './PostReducer'
import EditReducer from './EditReducer'
import DeleteReducer from './DeleteReducer'

const RootReducer = combineReducers({
    PostReducer,
    EditReducer,
    DeleteReducer
});
export default RootReducer
