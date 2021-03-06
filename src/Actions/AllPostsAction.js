import ActionTypes from "./ActionTypes";
import axios from "axios";

export const receivedPosts = (obj) => ({
    type: ActionTypes.RECEIVED_POSTS,
    payload: {
        newValue: obj
    },
});

export function asyncCallGetAllPosts() {
    var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbgetallposts'
    //'http://localhost:3002/getAllPosts'
    return function (dispatch) {
        axios.get(url)
            .then((result) => {
                const obj = []
                const response = result.data.Response;
                dispatch(receivedPosts(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}


export const newPostClicked = () => ({
    type: ActionTypes.NEW_POST_CLICKED,
});

