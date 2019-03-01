import ActionTypes from "./ActionTypes";
import axios from "axios";

export const receivedInsertPostResponse = (obj) => ({
    type: ActionTypes.RECEIVED_INSERT_POST_RESPONSE,
    payload: {
        newValue: obj
    },
});

export function handleSubmit(data) {
    var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbsavepost'
    //var url = 'http://localhost:3002/savePost'
    return function (dispatch) {
        axios.post(url, JSON.stringify(data))
            .then((result) => {
                const response = result.data;
                const obj = response.Response
                dispatch(receivedInsertPostResponse(obj))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}
