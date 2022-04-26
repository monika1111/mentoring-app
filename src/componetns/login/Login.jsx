import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Login.scss";

import { logInStart } from "../../store/auth/authActions";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { loggedIn, error } = useSelector((state) => state.auth);

    if (loggedIn) {
        return <Navigate to={"/dashboard"}/>
    }

    return (
        <div className="login-container">
            <ul className="login-form">
                <li className="calculator-title">
                    <h2>Login</h2>
                </li>
                <li>
                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                </li>
                <li>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </li>
                {error ? <li className="error">failed to login!</li> : ""}
                <li className="login-register">
                    <div className="submit" onClick={() => dispatch(logInStart({ email, password }))}>Login</div>
                    <div className="signup" onClick={() => navigate("/register")}>Sign Up</div>
                </li>
            </ul>
        </div>
    )
}
