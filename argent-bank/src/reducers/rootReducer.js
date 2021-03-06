const initState = {
    isConnected : false,
    token : "",
    userData : {}
}

const rootReducer = (state = initState,action) => {

    if(action.type === "USER_LOGGIN_SUCCESS"){
        let newState = {...state, isConnected : action.payload.isConnected, token : action.payload.token, userData :action.payload.userData };
        return newState;
    } else if(action.type === "USER_SIGN_OUT"){
        return initState;
    }else if(action.type === "USER_EDIT_NAME"){
        let newState = {...state, userData :action.payload.userData };
        return newState;
    }
    return state;
}

export default rootReducer;