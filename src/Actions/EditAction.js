import ActionTypes from "./ActionTypes";
import axios from "axios";

export const receivedUpdatePostResponse = (obj) => ({
    type: ActionTypes.RECEIVED_UPDATE_POST_RESPONSE,
    payload: {
        newValue: obj
    }
});

export function handleEdit(data) {
    var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbeditpost'
    //var url = 'http://localhost:3002/editPost'
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

export const editPostClicked = (obj) => ({
    type: ActionTypes.EDIT_POST_CLICKED,
    payload: {
        newValue: obj
    }
})

export const closeEditFile = () => ({
    type: ActionTypes.CLOSE_EDIT_POST_CLICKED,
})

