import { useRef, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuthContext } from "../../context/auth";

function Login() {

    const history = useHistory();

    const [error, setError] = useState('');
    const email = useRef();
    const password  = useRef();

    const { signIn, setIsAuth } = useAuthContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(email.current.value, password.current.value)
            .then( async (userCredentials) => {
                const userId = userCredentials.user.uid;
                setError('')
                setIsAuth(true);
                history.push('/lock-screen');
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
                           <div className="d-flex align-items-center"><img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo logo" alt="logo"/></div>
                     </div>      
                     <h3 className="mb-2">Sign In</h3>
                     <p>Login to stay connected.</p>
                     { error ? 
                     <div className="alert bg-white alert-danger" role="alert">
                        <div className="iq-alert-text"> {error} </div>
                     </div> : "" }
                     <form onSubmit={handleSubmit}>
                        <div className="row">
                           <div className="col-lg-12">
                              <div className="floating-label form-group">
                                 <input className="floating-input form-control" name="email" ref={email} type="email" required placeholder=" "/>
                                 <label>Email</label>
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="floating-label form-group">
                                 <input className="floating-input form-control" name="password" ref={password} type="password" required placeholder=" "/>
                                 <label>Password</label>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="custom-control custom-checkbox mb-3 text-left">
                                 <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                 <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <NavLink to="reset-password" className="text-primary float-right">Forgot Password?</NavLink>
                           </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                        <p className="mt-3 mb-0">
                           Create an Account <NavLink to="/signup" className="text-primary"><b>Sign Up</b></NavLink>
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

export default Login;
