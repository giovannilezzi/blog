import ActionTypes from "./ActionTypes";
import axios from "axios";
import {receivedInsertPostResponse} from "./PostAction";

export const receivedUpdatePostResponse = (obj) => ({
    type: ActionTypes.RECEIVED_UPDATE_POST_RESPONSE,
    payload: {
        newValue: obj
    },
});

export function handleEdit(data) {
    var url = //'http://smart.nbsgroup.it/plugins/com.mattermost.server-dbsavepost'
    'http://localhost:3002/editPost'
    return function (dispatch) {
        axios.post(url, JSON.stringify(data))
            .then((result) => {
                const response = result.data;
                const obj = response.Response
                dispatch(receivedUpdatePostResponse(obj))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}
