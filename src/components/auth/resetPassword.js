import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/auth";

function ResetPassword() {

    const { resetPassword } = useAuthContext();
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPassword(emailRef.current.value)
            .then(() => {
                setError("");
                setMsg("check your Inbox for further instruction ");
            })
            .catch(err => {
                setMsg("");
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
                                    <div className="d-flex align-items-center"><img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo logo" alt="logo" /></div>
                                </div>
                                <h3 className="mb-2">Reset Password</h3>
                                {msg ?
                                    <div className="alert bg-white alert-success" role="alert">
                                        <div className="iq-alert-text"> {msg} </div>
                                    </div> :
                                    <>
                                        <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
                                        {error ?
                                            <div className="alert bg-white alert-danger" role="alert">
                                                <div className="iq-alert-text"> {error} </div>
                                            </div> : ""}
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="floating-label form-group">
                                                        <input ref={emailRef} className="floating-input form-control" type="email" placeholder=" " />
                                                        <label>Email</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Reset</button>
                                        </form>
                                    </>
                                }
                                <p className="mt-3 mb-0">
                                    <NavLink to="/login" className="text-primary"><b>Sign In</b></NavLink> to Continue
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ResetPassword;
