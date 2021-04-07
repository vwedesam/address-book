import { auth } from '../firebase';
import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import { useAuthContext } from "../context/auth";

function UnProtectedRoute({ children, ...rest }) {

    const { isAuth, setIsAuth, setAuthUser } = useAuthContext();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const unSubscribe = auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log('context', user)
                setIsAuth(true);
                setAuthUser(user);
                setLoading(false)
            } else {
                // No user is signed in.
                setLoading(false)
            }
        });
        
    }, [auth])

    return (
        <Route
            {...rest} >
            {isAuth ? <Redirect to="/" /> : children}
        </Route>
    )
}

export default UnProtectedRoute;