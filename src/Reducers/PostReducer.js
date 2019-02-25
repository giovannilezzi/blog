import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    response: null,
    posts: [],
    isLoading: true,
    allPostLoaded: true
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.RECEIVED_INSERT_POST_RESPONSE:
            return { ...state, response: action.payload.newValue, allPostLoaded: true}

        case ActionTypes.RECEIVED_POSTS:
            state.posts = []
            return { ...state, posts: state.posts.concat(action.payload.newValue), isLoading: false, allPostLoaded: false};

        case ActionTypes.RECEIVED_DELETE_POST_RESPONSE:
            return { ...state, allPostLoaded: true}

        default:
            return state;
    }
}
export default postReducer;
