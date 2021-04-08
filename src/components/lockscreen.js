import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/auth";

function LockScreen() {

    const { authUser, isAuth } = useAuthContext();
    
    return (
        <div className="wrapper">
            <section className="login-content">
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center height-self-center">
                        <div className="col-md-5 col-sm-12 col-12 align-self-center">
                            <div className="sign-user_card">
                                <div className="logo-detail">
                                    <div className="d-flex align-items-center"><img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo logo" alt="logo" /> <h4 className="logo-title ml-3"> Address Book</h4></div>
                                </div>
                                <h3 className="mb-2"> Hi ! {isAuth ? authUser.email : ""} </h3>
                                <p> Click here to </p>
                                {isAuth ? 
                                <NavLink to="/" className="btn btn-primary">Continue &nbsp; &raquo;</NavLink> :
                                <NavLink to="/login" className="btn btn-primary">Login &nbsp; &raquo; </NavLink> }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LockScreen;
