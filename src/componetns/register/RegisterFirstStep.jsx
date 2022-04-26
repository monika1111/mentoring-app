import { useSelector, useDispatch } from 'react-redux';

import { updateRegisterProfileData } from '../../store/auth/authActions';

export const RegisterFirstStep = () => {
    const { firstName, lastName, email, password } = useSelector((state) => state.auth.profile);

    const dispatch = useDispatch();

    const onChange = (event) => {
        dispatch(updateRegisterProfileData({ [event.target.name]: event.target.value }))
    }

    return (
        <>
            <div className="row" >
                <label>First Name</label>
                <input value={firstName} name="firstName" onChange={onChange}/>
            </div>
            <div className="row" >
                <label>Last Name</label>
                <input value={lastName} name="lastName" onChange={onChange}/>
            </div>
            <div className="row" >
                <label>Email</label>
                <input value={email} name="email" onChange={onChange}/>
            </div>
            <div className="row" >
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={onChange}/>
            </div>
        </>
    )
}

