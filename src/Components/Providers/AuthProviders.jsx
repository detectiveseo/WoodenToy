import React, { createContext, useEffect, useState } from 'react';
import app from '../Pages/Account/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth'
export const AuthDetials = createContext(null);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
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
    const onSingUpFormSubmit = (email, password, userName, photo) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            updateProfile(auth.currentUser, {
                displayName: userName,
                photoURL: photo,
            }).then((res) => {
                setUser(res.user);
            })
        }).catch((err) => {
            alert(err);
        })
    }

    //sing in with form
    const onSingInFormSubmit = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setUser(res.user);
        }).catch((err) => {
            alert(err);
        })
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
        })
        return () => {
            unSubscribe();
        }
    },[])

    const sharedData = {
        user,
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