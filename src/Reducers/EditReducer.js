import ActionTypes from "../Actions/ActionTypes";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../Store/AppStore";
import AllPostContainer from '../Containers/AllPostContainer'


const initialState = {
    responseUpdatePost: null,
}

const editReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.RECEIVED_UPDATE_POST_RESPONSE:
            ReactDOM.render(
                <Provider store={store}>
                    <div>
                        <AllPostContainer/>
                    </div>
                </Provider>,
                document.getElementById('page'),
            );
           console.log("ciao")
            return { ...state, responseUpdatePost: action.payload.newValue}

        default:
            return state;
    }
}
export default editReducer;
