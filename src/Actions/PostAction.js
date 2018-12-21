import ActionTypes from "./ActionTypes";
import axios from "axios";

export const receivedResponse = (obj) => ({
    type: ActionTypes.RECEIVED_RESPONSE,
    payload: {
        newValue: obj
    },
});

export function handleSubmit(data) {
    var url = 'http://localhost:3002/saveBlog'
    return function (dispatch) {
        axios.post(url, JSON.stringify(data))
            .then((result) => {
                const response = result.data;
                const obj = response.Response
                dispatch(receivedResponse(obj))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}
