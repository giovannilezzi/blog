import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    previewFileClicked: false,
    editFileClicked: false,
    post: null,
    viewPostClicked: false
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.NEW_POST_CLICKED:
            return { ...state, previewFileClicked:true}

        case ActionTypes.RECEIVED_INSERT_POST_RESPONSE:
            return { ...state, previewFileClicked:false}

        case ActionTypes.EDIT_POST_CLICKED:
            return { ...state, editFileClicked:true, post: action.payload.newValue}

        case ActionTypes.RECEIVED_UPDATE_POST_RESPONSE:
            return { ...state, editFileClicked:false}

        case ActionTypes.CLOSE_EDIT_POST_CLICKED:
            return {...state, editFileClicked:false}

        case ActionTypes.VIEW_POST:
            return {...state, viewPostClicked:true, post: action.payload.newValue}

        case ActionTypes.CLOSE_POST:
            return {...state, viewPostClicked:false}

        default:
            return state;
    }
}

export default postReducer;
