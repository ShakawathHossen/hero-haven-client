import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AddToy = () => {




    const handleAddCoffee=event=>{
        event.preventDefault();
        const form = event.target;
        const figureName=form.figureName.value;
        const sellerName=form.sellerName.value;
        const sellerEmail=form.sellerEmail.value;
        const price=form.price.value;
        const subCategory=form.subCategory.value;
        const Ratings=form.Ratings.value;
        const quantity=form.quantity.value;
        const photo=form.photo.value;
        const details=form.details.value;

        const newToy={figureName,sellerName,sellerEmail,price,subCategory,Ratings,quantity,photo,details}
        console.log(newToy)

        // send data to the server 
        // fetch('http://localhost:5000/coffee',{
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newCoffee)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     if(data.insertedId){
        //         Swal.fire({
        //             title: 'New Coffee Added !',
        //             text: 'Explore the New Coffee',
        //             icon: 'success',
        //             confirmButtonText: 'Ok'
        //           })

        //     }
        // })

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
                <form onSubmit={handleAddCoffee}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="mb-1">Figure Name</label>
                                <input id="name" type="text" name="figureName" required placeholder='Enter Figure Name' className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="chef" className="mb-1">Seller Name</label>
                                <input id="chef" name="sellerName" required placeholder='Enter Seller Name' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="supplier" className="mb-1">Seller Email</label>
                                <input id="supplier" name="sellerEmail" required placeholder='Enter Seller Email' type="email" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="taste" className="mb-1">Price</label>
                                <input id="taste" name="price" required placeholder='Price' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="category" className="mb-1">Sub Category</label>
                                <input id="category"  name="subCategory" required placeholder='Enter Sub Category' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="details" className="mb-1">Ratings</label>
                                <input id="details"  name="Ratings" required placeholder='Enter Ratings' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="category" className="mb-1">Available Quantity</label>
                                <input id="category"  name="quantity" required placeholder='Enter Available Quantity' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="details" className="mb-1">Photo</label>
                                <input id="details"  name="photo" required placeholder='Enter photo URL' type="text" className="px-4 py-2 border rounded focus:outline-[#ffd04281]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="photoUrl" className="mb-1">Details</label>
                        <textarea id="photoUrl" name="details" required placeholder='Enter Details' type="text" className="w-full px-4 py-2 border rounded focus:outline-[#ffd04281]" />
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