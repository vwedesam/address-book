import { useEffect } from "react";
import { useAuthContext } from "../../context/auth";
import LockScreen from "./lockscreen";


function LogOut(){

    const { logOut, setIsAuth, setAuthUser } = useAuthContext();

    useEffect( async ()=>{
        await logOut();
        setIsAuth(false);
        setAuthUser({});
    }, []);

    return(
        <LockScreen/>
    )
}

export default LogOut;
