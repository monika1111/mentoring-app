import Types from "./userActionsTypes";

const initialSate = {
    profile: {},
    suggestions: {},
}

const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case Types.SET_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default reducer