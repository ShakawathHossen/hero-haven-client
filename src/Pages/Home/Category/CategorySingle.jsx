import React from 'react';
import 'react-tabs/style/react-tabs.css';

const CategorySingle = ({ job }) => {

    const { _id, figureName, sellerName, sellerEmail, price, subCategory, subCategoryCode, Ratings, quantity, photo, details } = job || {};
    return (
        <div className="">
            <div className='shadow-xl p-4'>
                <figure className='flex justify-center w-full h-48 bg-[#F7B801] '><img className='h-52 hover:h-56 duration-300'  src={photo} alt="" /></figure>
                <div>
                    <div className='card-body'>
                        <h1 className='custom-font text-xl'>{figureName}</h1>
                       <div className='flex justify-between'>
                       <h1>Price: ${price}</h1>
                        <h1>Ratings: {Ratings}</h1>
                       </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='custom-button2'>Details</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CategorySingle;