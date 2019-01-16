import ActionTypes from "../Actions/ActionTypes";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../Store/AppStore";
import AllPostContainer from '../Containers/AllPostContainer'

const initialState = {
    responseDeletePost: null,
}

const deleteReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.RECEIVED_DELETE_POST_RESPONSE:
            return { ...state, responseDeletePost: action.payload.newValue}

        default:
            return state;
    }
}
export default deleteReducer;
