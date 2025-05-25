import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { use } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase/firebase.init';

const Register = () => {
    const { createUser } = use(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider 
    
    const handleGoogleSignIn = () =>{
        console.log('googlee sign')

        signInWithPopup(auth, provider)
         .then(result => {
            console.log(result)
        }).catch(error => {
            console.log(error)
        })
    }


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...rest } = Object.fromEntries(formData.entries());

       
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!hasUppercase || !hasLowercase || !isLongEnough) {
            setPasswordError("Password must be at least 6 characters and include an uppercase and lowercase letter.");
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Must be at least 6 characters with uppercase & lowercase letters.',
            });
            return;
        }

        setPasswordError(""); 

        const userProfile = {
            email,
            ...rest
        };

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Register Successfully Completed.",
                                icon: "success",
                                timer: 1500,
                            });
                            navigate("/"); 
                        }
                    });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error"
                });
            });
    };

    return (
        <div className='bg-gradient-to-b from-amber-50 to-amber-300 flex justify-center items-center min-h-screen'>
            <div>
                <img className='h-163' src="https://i.ibb.co/pvtWQGG3/login-concept-illustration-114360-757.jpg" alt="" />
            </div>
            <div className="card bg-white w-full max-w-sm py-5">
                <h2 className='font-bold text-3xl text-center underline'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        <label className="label">Phone Number</label>
                        <input name='phone' type="text" className="input" placeholder="Phone Number" required />
                        <label className="label">Photo Url</label>
                        <input name='photo' type="text" className="input" placeholder="Photo Url" required />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        
                        {passwordError && <p className='text-red-500 text-xs'>{passwordError}</p>}

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <div className='space-y-4'>
                            <button type='submit' className="btn btn-neutral mt-4 w-full">Register</button>
                            <button  onClick={handleGoogleSignIn} className='btn btn-secondary w-full'><FcGoogle size={24} />Login with Google</button>
                        </div>

                        <p className='mt-3 text-center font-semibold'>
                            Already Have An Account? <Link className='text-secondary font-semibold' to="/login">Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
