import { auth } from '../firebase';
import { useEffect, useState } from "react";
import { Route, useHistory } from "react-router";
import { useAuthContext } from "../context/auth";

function ProtectedRoute({ children, ...rest }) {

    const { isAuth, setIsAuth, setAuthUser, getPhoneNumber } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        const unSubscribe = auth.onAuthStateChanged(function (user) {
            if (user) {
                // user signed in
                setIsAuth(true);
                getPhoneNumber(user.uid)
                    .then(snapShot=>{
                        if(snapShot.exists){
                        user.contact = snapShot.data().phoneNumber
                        }
                        setAuthUser(user);
                        setLoading(false)
                    })
                    .catch(console.log)
            } else {
                // No user is signed in
                history.push('/lock-screen');
                setLoading(false)
            }
        });
    }, [auth])

    return (
        <>
        { loading ? <div id="loading"> <div id="loading-center"> </div> </div> :
        <Route
            {...rest} >
            { children }
        </Route>
        }
        </>
    )
}

export default ProtectedRoute;