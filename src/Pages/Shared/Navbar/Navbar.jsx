import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { AuthContext } from '../../../Providers/AuthProviders';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // handle logout 

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };


  // handle logout 
  return (
    <nav className="bg-[#283149]">

      <div className=" px-4 sm:px-6 container mx-auto ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to='/'>
              <img
                className="h-10"
                src="https://i.ibb.co/K6FWZtt/herohaven1-png.jpg"
                alt="Website Logo"
              />
            </Link>
          </div>
          <div>
            <div className="hidden md:block">
              {user ? <div className="flex items-baseline space-x-4">
                <NavLink to='/'
                  href="#"
                  className="text-white hover:text-[#F7B801] hover:underline duration-300 px-3 font-medium"
                >
                  Home
                </NavLink>
                <NavLink to='/all-toys'
                  href="#"
                  className="text-white hover:text-[#F7B801] hover:underline duration-300 px-3  font-medium"
                >
                  All Toys
                </NavLink>
                <NavLink to='/my-toys'
                  href="#"
                  className="text-white hover:text-[#F7B801] hover:underline duration-300 px-3 font-medium"
                >
                  My Toys
                </NavLink>
                <NavLink to='/add-toy'
                  href="#"
                  className="text-white hover:text-[#F7B801] hover:underline duration-300 px-3  font-medium"
                >
                  Add A Toy
                </NavLink>
                <NavLink to='/blogs'
                  href="#"
                  className="text-white hover:text-[#F7B801] hover:underline duration-300 px-3  font-medium"
                >
                  Blogs
                </NavLink>
              </div> :
                <div className="flex items-baseline space-x-4">
                  <NavLink to='/'
                    href="#"
                    className="text-white hover:text-[#F7B801] hover:underline duration-300 px-3 font-medium"
                  >
                    Home
                  </NavLink>
                  <NavLink to='/all-toys'
                    href="#"
                    className="text-white hover:text-[#F7B801] hover:underline duration-300 px-3  font-medium"
                  >
                    All Toys
                  </NavLink>
                  <NavLink to='/blogs'
                    href="#"
                    className="text-white hover:text-[#F7B801] hover:underline duration-300 px-3  font-medium"
                  >
                    Blogs
                  </NavLink>
                </div>




              }
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user &&
                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>

                  <img className='rounded-full w-8' src={user.photoURL} />

                </div>

              }
              {user ?
                <button onClick={handleLogOut} className="text-white hover:text-[#F7B801] hover:underline duration-300 px-3 font-medium">
                  Logout</button> :
                <Link to='/login'>
                  <button className="text-white hover:text-[#F7B801] hover:underline duration-300 px-3 font-medium">
                    Login
                  </button>
                </Link>
              }
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white inline-flex items-center justify-center p-2 rounded-md"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            {user ? <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink to='/'
                href="#"
                className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </NavLink>
              <NavLink to='/all-toys'
                href="#"
                className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                All Toys
              </NavLink>
              <NavLink to='/my-toys'
                href="#"
                className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                My Toys
              </NavLink>
              <NavLink to='/add-toy'
                href="#"
                className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Add A Toy
              </NavLink>
              <NavLink to='/blogs'
                href="#"
                className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Blogs
              </NavLink>
            </div> :





              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink to='/'
                  href="#"
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </NavLink>
                <NavLink to='/all-toys'
                  href="#"
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  All Toys
                </NavLink>

                <NavLink to='/blogs'
                  href="#"
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Blogs
                </NavLink>
              </div>
            }
            <div className="pt-4 pb-3 border-t border-gray-700">
              {
                user &&
                <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.photoURL}
                    alt="User Profile Picture"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                  {user.displayName}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                  {user.email}
                  </div>
                </div>
              </div>
              }
              <div className="mt-3 px-2 space-y-1">


                {user ?
                  <button onClick={handleLogOut} className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                    Logout</button> :
                  <Link to='/login'>
                    <button  className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                      Login
                    </button>
                  </Link>
                }
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};


export default Navbar;