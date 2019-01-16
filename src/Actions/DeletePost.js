import ActionTypes from "./ActionTypes";
import axios from "axios";
import {receivedInsertPostResponse} from "./PostAction";

export const receivedDeletePostResponse = (obj) => ({
    type: ActionTypes.RECEIVED_DELETE_POST_RESPONSE,
    payload: {
        newValue: obj
    },
});

export function deletePost(requestBody) {
    var url = 'http://smart.nbsgroup.it/plugins/com.mattermost.server-dbdeletepost'
    // 'http://localhost:3002/deleteBlog'
    return function (dispatch) {
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data;
                const obj = response.Response
                dispatch(receivedDeletePostResponse(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}
