import { useSelector, useDispatch } from "react-redux";

import { updateRegisterProfileData } from "../../store/auth/authActions";

export const RegisterSecondStep = () => {
    const { department, jobTitle, country,  city } = useSelector((state) => state.auth.profile);

    const dispatch = useDispatch();

    const onChange = (event) => {
        dispatch(updateRegisterProfileData({ [event.target.name]: event.target.value }))
    }

    return (
        <>
            <div className="row" >
                <label>Department</label>
                <input value={department} name="department" onChange={onChange}/>
            </div>
            <div className="row" >
                <label>Job Title</label>
                <input value={jobTitle} name="jobTitle" onChange={onChange}/>
            </div>
            <div className="row" >
                <label>Country</label>
                <input value={country} name="country" onChange={onChange}/>
            </div>
            <div className="row" >
                <label>City</label>
                <input value={city} name="city" onChange={onChange}/>
            </div>
        </>
    )
}