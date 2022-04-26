import Types from "./authActionTypes"

export const logInStart = (credentials) => ({
    type: Types.LOG_IN_START,
    payload: credentials
})

export const logInSuccess = (user) => ({
    type: Types.LOG_IN_SUCCESS,
    payload: user
})

export const logInFailure = (error) => ({
    type: Types.LOG_IN_FAILURE,
    payload: error
})

export const logOut = () => ({
    type: Types.LOG_OUT
})

export const registerStart = (data) => ({
    type: Types.REGISTER_START,
    payload: data
})

export const registerSuccess = (authKey) => ({
    type: Types.REGISTER_SUCCESS,
    payload: authKey
})

export const registerFailure = (error) => ({
    type: Types.REGISTER_FAILURE,
    payload: error
})

export const updateRegisterProfileData = (data) => ({
    type: Types.UPDATE_REGISTER_PROFILE,
    payload: data
})

export const addRegisterSuggestion = (data) => ({
    type: Types.ADD_REGISTER_SUGGESTION,
    payload: data
})

export const removeRegisterSuggestion = (data) => ({
    type: Types.REMOVE_REGISTER_SUGGESTION,
    payload: data
})