import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useSelector } from 'react-redux';

import { Login } from "../login/Login";
import { Register } from "../register/Register";
import { PrivateRoute } from "../privateRoute/PrivateRoute";
import { ContentContainer } from "../contentContainer/ContentContainer";
import { Dashboard } from "../dashboard/Dashboard";
import { SuggestionsContainer } from "../suggestions/SuggestionsContainer";
import { Loader } from "../common/loader/Loader";

export const Router = () => {
    const { logInInProgress } = useSelector((state) => state.auth);

    if(logInInProgress) {
        return <Loader/>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute><ContentContainer/></PrivateRoute>}>
                    <Route index element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="suggestions" element={<PrivateRoute><SuggestionsContainer/></PrivateRoute>}/>
                </Route>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
};

