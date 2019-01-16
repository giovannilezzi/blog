import ActionTypes from "./ActionTypes";
import axios from "axios";
import {receivedInsertPostResponse} from "./PostAction";

export const receivedUpdatePostResponse = (obj) => ({
    type: ActionTypes.RECEIVED_UPDATE_POST_RESPONSE,
    payload: {
        newValue: obj
    },
});

export function handleEdit(post) {
    console.log(post)
    return function (dispatch) {
        var response = "ok"
        dispatch(receivedUpdatePostResponse(response))
    }
}
