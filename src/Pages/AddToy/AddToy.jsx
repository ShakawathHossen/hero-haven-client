import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddToy = () => {

    const handleAddToy=event=>{
        event.preventDefault();
        const form = event.target;
        const figureName=form.figureName.value;
        const sellerName=form.sellerName.value;
        const sellerEmail=form.sellerEmail.value;
        const price=form.price.value;
        const subCategory=form.subCategory.value;
        const subCategoryCode=form.subCategoryCode.value;
        const Ratings=form.ratings.value;
        const quantity=form.quantity.value;
        const photo=form.photo.value;
        const details=form.details.value;

        const newToy={figureName,sellerName,sellerEmail,price,subCategory,subCategoryCode,Ratings,quantity,photo,details}
        console.log(newToy)

        // send data to the server 
        fetch('http://localhost:5000/toys',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'New Toy Added !',
                    text: 'Explore the Hero Haven',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })

            }
        })
          // send data to the server 

    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hero Haven-Add Toy</title>
            </Helmet>
            <div>
            <div className='container mx-auto py-10'>
               <div className='bg-white shadow-2xl px-20 py-10'>
               <div className='text-center'>
                    <h1 className='text-5xl custom-font mb-10 '>Add a <span className='text-[#F7B801]' >New Toy</span> </h1>
                </div>
                <form onSubmit={handleAddToy}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="figureName" className="mb-1">Figure Name</label>
                                <input id="figureName" type="text" name="figureName" required placeholder='Enter Figure Name' className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="sellerName" className="mb-1">Seller Name</label>
                                <input id="sellerName" name="sellerName" required placeholder='Enter Seller Name' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="sellerEmail" className="mb-1">Seller Email</label>
                                <input id="sellerEmail" name="sellerEmail" required placeholder='Enter Seller Email' type="email" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="price" className="mb-1">Price</label>
                                <input id="price" name="price" required placeholder='Price' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="subCategory" className="mb-1">Sub Category</label>
                                <input id="subCategory"  name="subCategory" required placeholder='Enter Sub Category' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="subCategoryCode" className="mb-1">Sub Category Code</label>
                                <input id="subCategoryCode"  name="subCategoryCode" required placeholder='Enter Sub Category Code' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="quantity" className="mb-1">Available Quantity</label>
                                <input id="category"  name="quantity" required placeholder='Enter Available Quantity' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                                <label htmlFor="ratings" className="mb-1">Ratings</label>
                                <input id="ratings"  name="ratings" required placeholder='Enter Ratings' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                                <label htmlFor="photo" className="mb-1">Photo</label>
                                <input id="Photo" name="photo" required placeholder='Enter photo URL' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                                <label htmlFor="details" className="mb-1">Details</label>
                                <input id="details"  name="details" required placeholder='Enter Details' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 text-white bg-[#283149] rounded font-bold">Add Toy</button>
                    </div>
                </form>
               </div>
            </div>

        </div>
            
        </div>
    );
};

export default AddToy;