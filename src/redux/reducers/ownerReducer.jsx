const ownerReducer = (state =[], action) => {
    switch(action.type) {
        case 'SET_OWNERS' :
            return action.payload
        default:
           return state;
    }
}

export default ownerReducer;
