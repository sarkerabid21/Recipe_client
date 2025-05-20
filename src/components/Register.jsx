// import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
// import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from '../firebase/firebase.config';

const Register = () => {
   

    return (
        <div className='bg-gradient-to-b from-amber-50 to-amber-300 flex justify-center items-center min-h-screen'>
            <div className="card bg-white w-full max-w-sm shadow-2xl py-5">
                <h2 className='font-bold text-3xl text-center underline'>Register Your Account</h2>
                <form  className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />
                        {/* {nameError && <p className='text-red-500 text-xs'>{nameError}</p>} */}

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" required />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        {/* {passwordError && <p className='text-red-500 text-xs'>{passwordError}</p>} */}

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <div className='space-y-4'>
                        <button type='submit ' className="btn btn-neutral mt-4 w-full" to="/">Register</button>

<button  className='btn  btn-secondary w-full' to="/"><FcGoogle size={24}/>Login with Google</button>
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
