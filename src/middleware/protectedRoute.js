import { auth } from '../firebase';
import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import { useAuthContext } from "../context/auth";

function ProtectedRoute({ children, ...rest }) {

    const { isAuth, setIsAuth, setAuthUser, getPhoneNumber } = useAuthContext();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const unSubscribe = auth.onAuthStateChanged(function (user) {
            if (user) {
                setIsAuth(true);
                getPhoneNumber(user.uid)
                    .then(snapShot=>{
                        user.contact = snapShot.val().phoneNumber
                        setAuthUser(user);
                        setLoading(false)
                    })
                    .catch(console.log)
            } else {
                setLoading(false)
            }
        });
    }, [auth])

    return (
        <Route
            {...rest} >
            {isAuth ? children : <Redirect to="/login" /> }
        </Route>
    )
}

export default ProtectedRoute;