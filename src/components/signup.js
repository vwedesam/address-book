import { useRef, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom'
import { useAuthContext } from "../context/auth";

function SignUp() {

    const history = useHistory();
    const [fields, setFields] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState('');
    const { signUp, addPhoneNumber, setIsAuth, updateProfile, phoneExist } = useAuthContext();
    const { name, email, password, phoneNumber, confirmPassword } = fields;

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
        if (e.target.name == 'confirmPassword') {
            if (password == e.target.value) setIsValid(true);
            else setIsValid(false);
            setError('')
        }
    }

    const checkIfPhoneExist = (e) =>{
        phoneExist(e.target.value)
        .then(snapShot=> {
            if(snapShot.exists){
                setError('Phone Number Already Exist !!!')
                setIsValid(false);
            }
            else {
                setError('')
                setIsValid(true)
            }
        })
        .catch(err=>{
            setError(err.message)
        })
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(email, password)
            .then( async (userCredentials) => {
                const userId = userCredentials.user.uid;
                setError('')
                setIsAuth(true);
                addPhoneNumber(userId, phoneNumber);
                await updateProfile({  displayName: name,
                    photoURL: '' });
                history.push('/');
            })
            .catch(err => {
                setError(err.message);
            })
    }

    return (
        <div className="wrapper">
            <section className="login-content">
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center height-self-center">
                        <div className="col-md-5 col-sm-12 col-12 align-self-center">
                            <div className="sign-user_card">
                                <div className="logo-detail">
                                    <div className="d-flex align-items-center"><img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo logo" alt="logo" /> <h4 className="logo-title ml-3">NotePlus</h4></div>
                                </div>
                                <h3 className="mb-2">Sign Up</h3>
                                <p>Create your  account.</p>
                                { error ? 
                                <div className="alert bg-white alert-danger" role="alert">
                                    <div className="iq-alert-text"> {error} </div>
                                </div> : "" }
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" placeholder="" name="name" value={name} onChange={handleChange} type="text" required />
                                                <label>Full Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" placeholder="" name="phoneNumber" onBlur={checkIfPhoneExist} type="text" required />
                                                <label>Phone Number</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" placeholder="" name="email" value={email} onChange={handleChange} type="email" required />
                                                <label>Email</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" placeholder="" name="password" value={password} onChange={handleChange} type="password" required />
                                                <label>Password</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" placeholder="" name="confirmPassword" value={confirmPassword} onChange={handleChange} type="password" required />
                                                <label>Confirm Password</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="custom-control custom-checkbox mb-3 text-left">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">I agree with the terms of use</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" disabled={ isValid && !error ? false : true} className="btn btn-primary">Sign Up</button>
                                    <p className="mt-3 mb-0">
                                        Already have an Account <NavLink to="/login" className="text-primary"><b>Sign In</b></NavLink>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default SignUp;
