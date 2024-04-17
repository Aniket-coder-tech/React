import React, { useContext } from 'react'
import UserContext from './userContext';
import { useState } from 'react';

import noteContext from './noteContext';
import { useNavigate } from 'react-router-dom';
export default function UserState(props) {
  const host="http://localhost:5000"
  const navigate=useNavigate();
  const[loginn,setLogin]=useState(false);
  const {alertt}=useContext(noteContext);
 
      const[notes,setNotes]=useState("");
     
  const createUser=async(user)=>{
    try {
        const response = await fetch(`${host}/api/auth/createUser`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
                     },
          body: JSON.stringify(user),
        });
       alertt("User created successfully")
    
      } catch (error) {
        console.error("Error:", error);
      }
  }
  const logoutUser=async()=>{
    localStorage.setItem("authtoken","");
    setLogin(false);
  }
  const loginUser=async(user)=>{
    
        
        const response = await fetch(`${host}/api/auth/login`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
                     },
          body: JSON.stringify(user),
        });
        const authtoken=await response.json();
        if( authtoken.success=="true"){localStorage.setItem("authtoken", authtoken.authtoken);
        alertt("Logged in successfully")
        setLogin(true);navigate("/home")}
        else{
          alertt("Loggin with correct credentials")
        }
        
       
    
      
  }
  return (
    <UserContext.Provider value={{createUser , loginUser,logoutUser,loginn,alert}}>{props.children}</UserContext.Provider>
    
  )
}

