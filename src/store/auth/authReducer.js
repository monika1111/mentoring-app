import Types from "./authActionTypes"
import {USERS_LIST} from "../../constants/UsersList";

const AUTH_TOKEN = localStorage.getItem("authToken");

const initialState = {
    longinInProgress: !!AUTH_TOKEN,
    loggedIn: false,
    loggedInError: null,
    registerInProgress: false,
    authToken: AUTH_TOKEN || null,
    profile: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        department: "",
        jobTitle: "",
        country: "",
        city: ""
    },
    suggestions: [],
    employeesList: USERS_LIST,
    errorRegister: null,
    errorLogin: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case Types.LOG_IN_START:
            return {
                ...state,
                longinInProgress: true,
                errorLogin: null
            };
        case Types.LOG_IN_SUCCESS:
            return {
                ...state,
                longinInProgress: false,
                loggedIn: true,
                loggedInError: null,
                authToken: action.payload.token
            };
        case Types.LOG_IN_FAILURE:
            return {
                ...state,
                longinInProgress: false,
                errorLogin: action.payload
            };
        case Types.UPDATE_REGISTER_PROFILE:
            return {
                ...state,
                profile: {...state.profile, ...action.payload},
            };
        case Types.ADD_REGISTER_SUGGESTION:
            return {
                ...state,
                suggestions: [...state.suggestions, action.payload],
                employeesList: state.employeesList.filter(employee => employee.id !== action.payload.id)
            };
        case Types.REMOVE_REGISTER_SUGGESTION:
            return {
                ...state,
                suggestions: state.suggestions.filter(employee => employee.id !== action.payload.id),
                employeesList: [...state.employeesList, action.payload],
            };
        case Types.REGISTER_START:
            return {
                ...state,
                registerInProgress: true,
            };
        case Types.REGISTER_SUCCESS:
            return {
                ...state,
                registerInProgress: false,
                errorRegister: null,
            };
        case Types.REGISTER_FAILURE:
            return {
                ...state,
                registerInProgress: false,
                errorRegister: action.payload,
            };
        default:
            return state;
    }
}

export default reducer

