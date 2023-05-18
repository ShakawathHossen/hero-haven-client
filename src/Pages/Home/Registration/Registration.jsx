import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Registration = () => {
    const {createUser}= useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const signUpInfo= {name,photoURL,email,password}
        console.log(signUpInfo);

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            Swal.fire({
                title: 'Registation Successfull',
                text: 'Continue your browsing',
                icon: 'success',
                confirmButtonText: 'Thanks'
              })
        })
        .catch((error) => {
           console.log(error);
          });
      };




    return (
        <div>
             <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        <div className=' mx-auto container'>
            
            <div className=" mx-auto flex md:flex-row flex-col-reverse  items-center md:p-16 py-8 ">
              
                <div className="md:w-1/2 border w-11/12 mx-auto shadow-2xl bg-[#ffffff] rounded-lg md:px-10 px-2">
                    <div className="card flex-shrink-0 w-full">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control pb-4 ">
                                
                                <div className='indicator w-full flex-col'>
                                    <span className="indicator-item badge bg-[#F7B801] border-none">Required</span>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control pb-4  ">
                               
                                <div className='indicator w-full flex-col'>
                                    <span className="indicator-item badge bg-[#F7B801] border-none">Required</span>
                                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control pb-4 ">
                                <div className='indicator w-full flex-col'>
                                    <span className="indicator-item badge bg-[#F7B801] border-none">Required</span>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control ">
                                
                                <div className='indicator w-full flex-col'>
                                    <span className="indicator-item badge bg-[#F7B801] border-none">Required</span>
                                    <input type="text" name='photoURL' placeholder="Phot URL" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="mt-6 form-control">
                                <button className="border border-[#F7B801] hover:bg-[#F7B801] px-10 hover:text-white text-[#F7B801] font-bold text-lg py-2 rounded-lg shadow duration-300">Sign Up</button>
                            </div>
                            <div className='text-center  mt-6'>
                                    <p className='text-sm'>New to <span className='font-semibold text-[#283149]'>Hero Haven</span> ?<Link to="/login"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Login Here</button>
                                    </Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src="https://i.ibb.co/drLzxR3/wepik-export-20230518065838-SPSb.png" alt="About Us Image" className="md:w-10/12 w-3/4  " />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Registration;