import Types from "./userActionsTypes";


export const setUser = (user) => ({
    type: Types.SET_USER,
    payload: user
})