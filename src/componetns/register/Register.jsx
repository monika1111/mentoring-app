import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import "./Register.scss"

import { registerStart } from "../../store/auth/authActions";
import { RegisterFirstStep } from "./RegisterFirstStep";
import { RegisterSecondStep } from "./RegisterSecondStep";
import { RegisterThirdStep } from "./RegisterThirdStep";

export const Register = () => {
    const [step, setStep] = useState(1);

    const dispatch = useDispatch();

    const { profile, loggedIn, errorRegister } = useSelector((state) => state.auth);

    const handleSubmit = () => {
        if(step === 1) {
            setStep(2)
        } else if(step === 2){
            setStep(3)
        } else {
            dispatch(registerStart(profile))
        }
    }

    if (loggedIn) {
        return <Navigate to={"/dashboard"}/>
    }

    return (
        <div className="register-container">
            <div className="register-form">
                <div className="row full-grid-column calculator-title">
                    <h2>{ step <= 2 ? "Sign Up" : "Make Suggestions" }</h2>
                </div>
                {step === 1 ? <RegisterFirstStep onNext={() => setStep(2)}/> :
                    step === 2 ? <RegisterSecondStep onNext={() => setStep(3)} /> :
                 <RegisterThirdStep />}
                {errorRegister ? <p className="error">failed to register!</p> : ""}
                <div className="row buttons-holder">
                    {step !== 1 && <div className="submit" onClick={() => setStep(step-1)}>
                        Previous
                    </div>}
                    <div className="submit" onClick={handleSubmit}>
                        {step === 3 ? "SIGN UP" : "NEXT"}
                    </div>
                </div>
            </div>
        </div>
    )
}

