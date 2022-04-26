import {all, call, put, takeLatest} from "redux-saga/effects";
import axios from "axios";

import {logInFailure, logInSuccess, logInStart, registerFailure, registerSuccess} from "./authActions";
import Types from "./authActionTypes";

// "email": "eve.holt@reqres.in",
// "password": "cityslicka"
const logIn = async (email, password) => {
    const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
    });
    return { authToken: response.data.token };
};

export function* loginStartWorker({ payload: { email, password } }) {
    try {
        const user = yield logIn(email, password);
        yield put(logInSuccess(user));
        yield localStorage.setItem("authToken", user.authToken);
    } catch (error) {
        yield put(logInFailure(error));
    }
}

export function* loginStartWatcher() {
    yield takeLatest(Types.LOG_IN_START, loginStartWorker);
}

const register = async (email, password) => {
    await axios.post("https://reqres.in/api/register", {
        email,
        password,
    });
};

export function* logInAfterRegister({ payload: { email, password } }) {
    yield put(logInStart({ email, password }));
}

export function* registerStartWorker({ payload: { email, password } }) {
    try {
        yield register(email, password);
        yield put(registerSuccess({ email, password }));
    } catch (error) {
        debugger
        yield put(registerFailure(error));
    }
}

export function* registerStartWatcher() {
    yield takeLatest(Types.REGISTER_START, registerStartWorker);
}

export function* registerSuccessWatcher() {
    yield takeLatest(Types.REGISTER_SUCCESS, logInAfterRegister);
}

export function* authSagas() {
    yield all([
        call(loginStartWatcher),
        call(registerStartWatcher),
        call(registerSuccessWatcher),
    ]);
}