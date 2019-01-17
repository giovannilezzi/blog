import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseCommentPost: null,
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.RECEIVED_COMMENT_POST:
            return { ...state, responseCommentPost: action.payload.newValue}

        default:
            return state;
    }
}
export default commentReducer;
