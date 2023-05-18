import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';



export const AuthContext= createContext(null);
const auth=getAuth(app);




const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    // create new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };

    // create new user

    // sign in user 
    const signIn=(email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    // logout

    const logOut=() => {
        setLoading(true);
        return signOut(auth);
    }
    // logout
    // update profile picture 

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
      };

    // update profile picture 
// check current user 
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('current user', currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);


// check current user 
    const authinfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;