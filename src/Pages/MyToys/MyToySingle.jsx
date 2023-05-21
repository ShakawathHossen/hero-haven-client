import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToySingle = ({ toy, myToys, setMyToys }) => {
    const { _id, figureName, sellerName, sellerEmail, price, subCategory, subCategoryCode, Ratings, quantity, photo, details } = toy;





    const handleDelete = (_id) => {

        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://hero-haven-server-two.vercel.app/toy/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(t => t._id !== _id);
                            setMyToys(remaining);
                        }
                    }

                    )
            }
        })
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
                <thead>
                    <tr >
                        <td className="px-6 py-3 whitespace-nowrap">
                            <img src={photo} alt='' className="h-16" />
                        </td >
                        <td className="px-8 py-3  whitespace-nowrap">{figureName}</td >
                        <td className="px-6 py-3 whitespace-nowrap ">{sellerEmail}</td >
                        <td className="px-6 py-3 whitespace-nowrap ">{sellerName}</td >
                        <td className="px-6 py-3 whitespace-nowrap ">{subCategory}</td >
                        <td className="px-6 py-3 whitespace-nowrap ">{price}</td >
                        <td className="px-6 py-3 whitespace-nowrap">{quantity}</td >
                        <td className="px-6 py-3 whitespace-nowrap">
                            <Link to={`/toy/${_id}`}>

                                <button >
                                    <img src="https://i.ibb.co/G08dvDK/edit-button.png" alt="" />

                                </button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="ml-4 ">
                                <img src="https://i.ibb.co/b1ngMDt/delete-button.png" alt="" />
                            </button>
                        </td >
                    </tr>

                </thead>
            </table>
        </div>

    );
};

export default MyToySingle;