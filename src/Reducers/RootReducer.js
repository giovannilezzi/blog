import { combineReducers } from 'redux';
import PostReducer from './PostReducer'
import EditReducer from './EditReducer'
import DeleteReducer from './DeleteReducer'
import CommentReducer from "./CommentRedeucer";
import PreviewReducer from "./PreviewReducer";

const RootReducer = combineReducers({
    PostReducer,
    EditReducer,
    DeleteReducer,
    CommentReducer,
    PreviewReducer
})
export default RootReducer
