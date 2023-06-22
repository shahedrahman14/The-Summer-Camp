/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth =getAuth(app)
export const AuthContext=createContext(null)

const AuthProviders = ({children}) => {
    const provider = new GoogleAuthProvider();
    
    const [user,setUser]=useState()
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
      }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
       return signOut(auth)
    }
    const updateUserProfile=(name,photo)=>{
        return  updateProfile(auth.currentUser, {
              displayName: name, photoURL: photo
          
            })
            
      }
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log(('current user',currentUser));
            setLoading(false)
        })
        return()=>{
           
            return unsubscribe()
        }
    },[])
    const authInfo={
        user,loading,createUser,signIn,logOut,googleSignIn,updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;