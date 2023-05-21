import React, { useContext, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../Providers/AuthProviders';

const CategorySingle = ({ category }) => {
    const {user}= useContext(AuthContext)




    const { _id, figureName, sellerName, sellerEmail, price, subCategory, subCategoryCode, Ratings, quantity, photo, details } = category || {};
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="">
            <div className='shadow-xl p-4'>
                <figure className='flex justify-center w-full h-48 bg-[#F7B801] '>
                    <img className='h-52 hover:h-56 duration-300' src={photo} alt="" />
                </figure>
                <div>
                    <div className='card-body'>
                        <h1 className='custom-font text-xl'>{figureName}</h1>
                        <div className='flex justify-between'>
                            <h1>Price: ${price}</h1>
                            <h1>Ratings: {Ratings}</h1>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                         <button onClick={openModal} className='custom-button2'>
                            Details
                        </button>
                        
                        
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-75'>
                    <div className='bg-white p-4 rounded shadow-xl'>
                        <div className='text-right'>
                            <button className='text-[#283149]' onClick={closeModal}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            </button>
                        </div>
                        <div className='grid md:grid-cols-5 grid-cols-1 gap-4 items-center mx-auto md:max-w-6xl'>
                            <div className='col-span-2 mx-auto'>
                                <img src={photo} alt='' className="md:w-48 w-20 " />
                            </div>
                            <div className='col-span-3'>
                                <p className="text-2xl leading-10 font-semibold">{figureName}</p>
                                <p className="leading-10 "><span className='font-bold'>sub Category :</span>{subCategory}</p>
                                <p className="leading-10 "><span className='font-bold'>Seller :</span> {sellerName}</p>
                                <p className="leading-10 "><span className='font-bold'>Seller Email :</span> {sellerEmail}</p>
                                <p className="leading-8 "><span className='font-bold'>Price :</span> ${price}</p>
                                <p className="leading-8 "><span className='font-bold'>Ratings :</span> ${Ratings}</p>
                                <p className="leading-7 "><span className='font-bold'>Details :</span> {details}</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategorySingle;
