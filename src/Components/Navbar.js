 import React, { useContext, useState } from 'react'
 import { Link } from "react-router-dom";
import userContext from '../context/userContext';
export default function Navbar() {
   const {loginn,logoutUser}=useContext(userContext);
   const handleLogout=()=>{
      logoutUser();
   }
   return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="/">myNotebook</a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          
        </ul>
       
        {localStorage.authtoken?
        (<Link to='/'> <button className='btn btn-primary mx-3' onClick={handleLogout} type='submit'>Logout</button></Link>):(<><Link to='/login'> <button className='btn btn-primary mx-3' type='submit'>Login</button></Link><Link to='/signup'><button className='btn btn-primary pd-auto' type='submit'>Signup</button></Link></>)
        }
      </div>
    </div>
  </nav>
   )
 }
 