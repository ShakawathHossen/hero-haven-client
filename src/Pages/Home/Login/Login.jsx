import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { Helmet } from 'react-helmet';

const Login = () => {

    const {signIn}= useContext(AuthContext)
    const nevigate= useNavigate();
    const location = useLocation()
    const from=location.state?.from.pathname || '/'
    console.log(from)
    const Auth=getAuth(app);
    const googleProvider= new GoogleAuthProvider();



     // google sign in 

     const handleGoogleSignIn=()=>{
        signInWithPopup(Auth,googleProvider)
        .then(result=>{
            const loggedInUser=result.data;
            nevigate(from,{replace:true})
            alert('Successfully logged in');

        })
        .catch(err=>{console.log(err);});
    }

    // google sign in 


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (password.length < 6) {
            alert('Password Must be at least 6 characters');
            return;
        }
        // email password sign in 
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                nevigate(from,{replace:true})
                Swal.fire({
                    title: 'login Successfull',
                    text: 'Continue your browsing',
                    icon: 'success',
                    confirmButtonText: 'Thanks'
                  })
            })
            .catch((error) => {
                console.log(error);
            });
        
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hero Haven-Log In</title>
            </Helmet>
            <div className=' mx-auto container'>
                <div className=" mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 ">
                    <div className="md:w-1/2 flex  justify-center">
                        <img src="https://i.ibb.co/rxY7xWQ/wepik-export-20230518061558-NNBD.png" alt="About Us Image" className="md:w-72 w-2/4 animate-pulse " />
                    </div>
                    <div className="md:w-1/2 w-11/12 mx-auto border shadow-2xl bg-[#ffffff] rounded-lg md:px-10 px-2">
                        <div className="card flex-shrink-0 w-full">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control ">
                                    <label className="label">
                                
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                        <span className="indicator-item badge bg-[#F7B801] border-none">Required</span>
                                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                               
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                        <span className="indicator-item badge bg-[#F7B801] border-none">Required</span>
                                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                    </div>

                                    <label className="label">
                                        <a href="#" className="label-text-alt text-sm link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="mt-6 form-control">
                                    <button className="border border-[#F7B801] hover:bg-[#F7B801] px-10 hover:text-white text-[#F7B801] font-bold text-lg py-2 rounded-lg shadow duration-300">Login</button>
                                </div>
                                <div className='text-center  mt-6'>
                                    <p className='text-lg  divider '>Or Connect With</p>
                                    <div className='my-4'>
                                        <button onClick={handleGoogleSignIn}  className='px-4'>
                                            <img className='w-10' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                                        </button>
                                        <button className='px-4'>
                                            <img className='w-10' src="https://i.ibb.co/VxKN3Mg/github.png" alt="" />

                                        </button>
                                    </div>
                                    <div>
                                        <p className='text-sm'>New to <span className='font-semibold text-[#283149]'>Hero Haven</span> ?<Link to="/registration"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Registration Here</button>
                                        </Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;