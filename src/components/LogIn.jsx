// LogIn.jsx
import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from './contexts/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase/firebase.init';

const LogIn = () => {
    const userIcon = "https://i.ibb.co.com/mCtVwWf7/user.png";
    const { logInUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const provider = new GoogleAuthProvider
    const handleGoogleSignIn = () =>{
        console.log('googlee sign');

        signInWithPopup(auth,provider)
         .then(result => {
            console.log(result)
        }).catch(error => {
            console.log(error)
        })
    }

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                console.log("Logged in:", result.user);
                Swal.fire({
                    title: "Success!",
                    text: "You have logged in successfully!",
                    icon: "success",
                    confirmButtonText: "OK"
                }).then(() => {
                    navigate(from, { replace: true }); 
                });
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: "Error!",
                    text: "Login failed. Please check your credentials.",
                    icon: "error",
                    confirmButtonText: "Try Again"
                });
            });
    };

    return (
        <div className='bg-gradient-to-b from-white to-amber-200 flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
                <h2 className='font-bold text-3xl text-center underline'>Login Your Account</h2>
                <form onSubmit={handleLogIn} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        <div className='space-y-4'>
                            <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>
                            <button onClick={handleGoogleSignIn} className='btn btn-secondary w-full'><FcGoogle size={24} />Login with Google</button>
                        </div>

                        <p className='mt-3 text-center font-semibold'>
                            Don't Have An Account? <Link className='text-secondary font-semibold' to="/register">Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
