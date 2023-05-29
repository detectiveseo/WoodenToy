import React, { createContext, useEffect, useState } from 'react';
import app from '../Pages/Account/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth'
export const AuthDetials = createContext(null);

const AuthProviders = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);
    const [searchkey, setSearchKey] = useState(null);
    const auth = getAuth(app);

    // sing up with google 
    const GoogleProvider = new GoogleAuthProvider();
    const clickToGoogleLogin = () => {
        signInWithPopup(auth, GoogleProvider)
        .then((res) => {
            setUser(res.user);
        }).catch((err) => {
            alert(err);
        })
    }


    // sing  up with form 
    const onSingUpFormSubmit = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sing in with form
    const onSingInFormSubmit = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }


    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }

    //click to log out
    const clickToLogOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            alert(error);
        });
    }

    //user observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
            setLoader(false)
        })
        return () => {
            unSubscribe();
        }
    },[])

    const sharedData = {
        searchkey,
        setSearchKey,
        loader,
        setLoader,
        updateUser,
        auth,
        user,
        setUser,
        onSingUpFormSubmit,
        onSingInFormSubmit,
        clickToGoogleLogin,
        clickToLogOut
    }

    return (
        <AuthDetials.Provider value={sharedData}>
            {children}
        </AuthDetials.Provider>
    );
};

export default AuthProviders;