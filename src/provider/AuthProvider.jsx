import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/Firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // singin
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with google
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // update profile
    const updateUserProfile = (username, photo) => {
        updateProfile(auth.currentUser , {
            displayName: username,
            photoURL: photo
        })
    }

    // sing Out
    function signOutUser() {
        console.log('sign out current user');
        return signOut(auth);
    }
// onAuthStateChanged
    useEffect(() => {
        const unsubsciber = onAuthStateChanged(auth, (currentUser => {
            console.log('current user ---->',currentUser)
            setUser(currentUser)
            setLoading(false)
        }))
        return () =>{
            unsubsciber()
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        signOutUser,
        showPassword,
        setShowPassword,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;