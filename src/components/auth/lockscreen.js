import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/auth";

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
                                    <div className="d-flex align-items-center"><img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo logo" alt="logo" /></div>
                                </div>
                                <h3 className="mb-2"> Hi ! {isAuth ? authUser.displayName : ""} </h3>
                                <p> Click here to </p>
                                {isAuth ? 
                                <a href="/" className="btn btn-primary">Continue &nbsp; &raquo;</a> :
                                <a href="/login" className="btn btn-primary">Login &nbsp; &raquo; </a> }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LockScreen;
