const initState = {
    user : {},
    isConnected : false,
    token : ""
}

const rootReducer = (state = initState,action) => {

    if(action.type === "USER_LOGGIN_SUCCESS"){
        let newState = {...state, isConnected : action.payload.isConnected, token : action.payload.token};
        console.log(newState);
        return newState;
    }
    return state;
}

export default rootReducer;