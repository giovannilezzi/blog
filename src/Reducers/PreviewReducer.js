import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    previewFileClicked: null
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.RECEIVED_INSERT_POST_RESPONSE:
            console.log(action.payload.newValue)
            return { ...state, response: action.payload.newValue}

        case ActionTypes.RECEIVED_POSTS:
            state.posts = []
            return { ...state, posts: state.posts.concat(action.payload.newValue), isLoading: false};

        default:
            return state;
    }
}
export default postReducer;
