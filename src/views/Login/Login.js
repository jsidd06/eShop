import React, { useState } from 'react';
import './Login.css'
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Link} from 'react-router-dom';
import {auth} from "../FireBase/Firebase"
import { ToastContainer, toast } from "react-toastify";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth)
                window.location.href = "/"
                toast.success("Login Successful")
            })
            .catch(err => alert(err.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
              if(auth){
                  window.location.href = "/login";
                toast.success("Register Successful now click on login")
              }
            })
            .catch(err => alert(err.message))
    }

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StorefrontIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' style={{cursor:"pointer"}} onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' style={{cursor: "pointer" }} onClick={register}>Create your eShop Account</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login;