const initialState = {
    response: null,
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVED_RESPONSE':
            console.log(action.payload.newValue)
            return { ...state, response: action.payload.newValue};
        default:
            return state;
    }
}
export default postReducer;
