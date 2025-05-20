import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const LogIn = () => {
    return (
       <div className='bg-gradient-to-b from-white to-amber-200 flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-3xl text-center underline'>Login Your Account</h2>
                <form  className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        {/* {error && <p className='text-red-500 text-xs mt-1'>{error}</p>} */}

                        <div className='space-y-4'>
                        <button  type='submit' className="btn btn-neutral mt-4 w-full">Login</button>

<button  className='btn btn-secondary w-full'><FcGoogle size={24}/>Login with Google</button>

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