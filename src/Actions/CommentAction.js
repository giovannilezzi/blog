import ActionTypes from "./ActionTypes";
import axios from "axios";

export const receivedCommentPostResponse = (obj) => ({
    type: ActionTypes.RECEIVED_COMMENT_POST,
    payload: {
        newValue: obj
    },
});

export function handleComment(data) {
  var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbaddcomment'
  //var url = 'http://localhost:3002/addComment'
  return function (dispatch) {
      axios.post(url, JSON.stringify(data))
          .then((result) => {
              const response = result.data;
              const obj = response.Response
              dispatch(receivedCommentPostResponse(obj))
          })
          .catch((err) => {
              console.log("Errore: " + err.response.data)
          })
  };
}

