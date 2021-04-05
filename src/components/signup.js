import { useState } from "react";
import { NavLink } from 'react-router-dom'

function SignUp() {

    const [fields, setFields] = useState({});

    const { name, email, phoneNumber } = fields;

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div class="wrapper">
            <section class="login-content">
                <div class="container h-100">
                    <div class="row justify-content-center align-items-center height-self-center">
                        <div class="col-md-5 col-sm-12 col-12 align-self-center">
                            <div class="sign-user_card">
                                <div class="logo-detail">
                                    <div class="d-flex align-items-center"><img src="../assets/images/logo.png" class="img-fluid rounded-normal light-logo logo" alt="logo" /> <h4 class="logo-title ml-3">NotePlus</h4></div>
                                </div>
                                <h3 class="mb-2">Sign Up</h3>
                                <p>Create your  account.</p>
                                <form>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="floating-label form-group">
                                                <input class="floating-input form-control" type="text" placeholder=" " />
                                                <label>Full Name</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="floating-label form-group">
                                                <input class="floating-input form-control" type="text" placeholder=" " />
                                                <label>Phone Number</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="floating-label form-group">
                                                <input class="floating-input form-control" type="email" placeholder=" " />
                                                <label>Email</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="floating-label form-group">
                                                <input class="floating-input form-control" type="password" placeholder=" " />
                                                <label>Password</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="floating-label form-group">
                                                <input class="floating-input form-control" type="password" placeholder=" " />
                                                <label>Confirm Password</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="custom-control custom-checkbox mb-3 text-left">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                                <label class="custom-control-label" for="customCheck1">I agree with the terms of use</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Sign Up</button>
                                    <p class="mt-3 mb-0">
                                        Already have an Account <NavLink to="/login" class="text-primary"><b>Sign In</b></NavLink>
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
