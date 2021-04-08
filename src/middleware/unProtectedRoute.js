import { auth } from '../firebase';
import { useEffect, useState } from "react";
import { Route, useHistory } from "react-router";
import { useAuthContext } from "../context/auth";

function UnProtectedRoute({ children, ...rest }) {

    const { isAuth, setIsAuth, setAuthUser } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        let timeOut;
        const unSubscribe = auth.onAuthStateChanged(function (user) {
            if (user) {
                // user signed in
                setIsAuth(true);
                setAuthUser(user);
                history.push("/lock-screen");
                setLoading(false)
            } else {
                // No user is signed in.
                setLoading(false)
            }
        });
        
    }, [auth])

    return (
        <>
        { loading ?  <div id="loading"> <div id="loading-center"> </div> </div> :
        <Route
            {...rest} >
            {children}
        </Route>
        }
        </>
    )

}

export default UnProtectedRoute;