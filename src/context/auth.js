import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from "../firebase";

const AuthContext = createContext();
const userDB = "users";
const phoneDB = "usersPhoneNumber";

export function AuthProvider({ children }){

    const [isAuth, setIsAuth] = useState(false);
    const [authUser, setAuthUser] = useState({});

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const changePassword = (newPassword) =>{
        return auth.currentUser.updatePassword(newPassword);
    }

    const updateEmail = (email) =>{
        return auth.currentUser.updateEmail(email);
    }

    const updateProfile = async ({ displayName, photoURL }) => {
        await auth.currentUser.updateProfile({
            displayName,
            photoURL,
        });
    }

    const getPhoneNumber = (userId) => {
        return db.collection(userDB).doc(userId).get()
    }
    
    const addPhoneNumber = (userId, phoneNumber) => {
        db.collection(phoneDB).doc(phoneNumber).set({
            userId
        })
        db.collection(userDB).doc(userId).set({
            phoneNumber
        })
    }
    
    const phoneExist = (phoneNumber) => {
        return db.collection(phoneDB).doc(phoneNumber).get()
    }

    const signIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logOut = () =>{
        return auth.signOut();
    }

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            authUser,
            setAuthUser,
            signUp,
            changePassword,
            updateEmail,
            updateProfile,
            getPhoneNumber,
            addPhoneNumber,
            phoneExist,
            signIn,
            logOut
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuthContext(){
    return useContext(AuthContext);
}
