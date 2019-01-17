import { combineReducers } from 'redux';
import PostReducer from './PostReducer'
import EditReducer from './EditReducer'
import DeleteReducer from './DeleteReducer'
import CommentReducer from "./CommentRedeucer";

const RootReducer = combineReducers({
    PostReducer,
    EditReducer,
    DeleteReducer,
    CommentReducer
});
export default RootReducer
