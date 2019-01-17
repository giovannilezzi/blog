import ActionTypes from "./ActionTypes";
import axios from "axios";

export const receivedPosts = (obj) => ({
    type: ActionTypes.RECEIVED_POSTS,
    payload: {
        newValue: obj
    },
});

export function asyncCallGetAllPosts() {
    var url = 'http://smart.nbsgroup.it/plugins/com.mattermost.server-dbgetallposts'
    //'http://localhost:3002/getAllBlog'
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
