import ActionTypes from "./ActionTypes";

export const viewPost = (obj) => ({
    type: ActionTypes.VIEW_POST,
    payload: {
        newValue: obj
    },
})

export const closeViewPost = () => ({
    type: ActionTypes.CLOSE_POST,
})
