import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            // .then(result => {
            //     const user = result.user;
            //     alert('Login Successfully');
            // })
            // .catch((error) => {
            //     console.log(error);
            // });
        if (password.length < 6) {
            alert('Password should be minimum 6 characters');
            return;
        }
    }

    return (
        <div>
            <div className=' mx-auto container'>
                <div className=" mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 ">
                    <div className="md:w-1/2">
                        <img src="https://i.ibb.co/g7KJfY8/Frame.png" alt="About Us Image" className="md:w-10/12 object-cover" />
                    </div>
                    <div className="md:w-1/2 w-full border shadow rounded md:px-10">
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
                                        <button className='px-4'>
                                            <img className='w-10' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                                        </button>
                                        <button className='px-4'>
                                            <img className='w-10' src="https://i.ibb.co/VxKN3Mg/github.png" alt="" />

                                        </button>
                                    </div>
                                    <div>
                                        <p className='text-sm'>New to <span className='font-semibold text-[#283149]'>Hero Haven</span> ?<Link to="/auth/signup"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Registration Here</button>
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