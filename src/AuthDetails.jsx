import React from "react";
import {useState } from "react";
import { useEffect } from "react";
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
const AuthDetails=()=>{

const [authUser,setAuthUser]=useState(null);

useEffect(()=>{

    const listen=onAuthStateChanged(auth,(user)=>{
        if(user){
            setAuthUser(user)
        }else{
            setAuthUser(null)
        }
    });
    return()=>{
        listen();
    }
},[]);

const userSignOut=()=>{
    signOut(auth).then(()=>{
        console.log('Sign out successful')
    }).catch(error=>console.log(error))
}


return <div>{authUser ? <><p>Sign in successful!</p><button onClick={userSignOut}>Sign Out</button></> : <p>Sign out successful!</p>}</div>;

};

export default AuthDetails;