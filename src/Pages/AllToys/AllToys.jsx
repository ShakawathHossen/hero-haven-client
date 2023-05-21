import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const AllToys = () => {
    const { user } = useContext(AuthContext);
    const [showAll, setShowAll] = useState(false);
    const alltoys = useLoaderData();
    const [searchValue, setSearchValue] = useState('');
    const [selectedToy, setSelectedToy] = useState(null);

    const displayedToys = showAll ? alltoys : alltoys.slice(0, 6);

    const handleSeeMore = () => {
        setShowAll(true);
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleViewDetails = (toy) => {
        if (!user) {
          
          Swal.fire({
            title: 'login to view details',
            text: 'Error',
            icon: 'error',
            confirmButtonText: 'ok'
          })
          window.location.href = '/login';
        } else {
          setSelectedToy(toy);
        }
      };

    const handleCloseModal = () => {
        setSelectedToy(null);
    };

    const filteredToys = displayedToys.filter((toy) =>
        toy.figureName.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className='container mx-auto mt-14'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hero Haven-All Toys</title>
            </Helmet>

            <div className="mb-4 flex justify-center">
                <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#283149]"
                    placeholder="Search by Toy Name"
                    value={searchValue}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Figure</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Toy Name</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Seller Email</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Seller</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Subcategory</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Price</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Quantity</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredToys.map((toy) => (
                            <tr key={toy.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img src={toy.photo} alt='' className="h-16 " />
                                </td>
                                <td className="py-4 whitespace-nowrap text-center">{toy.figureName}</td>
                                <td className="py-4 px-4 whitespace-nowrap text-center">{toy.sellerEmail}</td>
                                <td className="py-4 whitespace-nowrap text-center">{toy.sellerName}</td>
                                <td className="py-4 whitespace-nowrap text-center">{toy.subCategory}</td>
                                <td className="py-4 whitespace-nowrap text-center">{toy.price}</td>
                                <td className="py-4 whitespace-nowrap text-center">{toy.quantity}</td>
                                <td className="py-4 whitespace-nowrap">
                                    <button className="custom-button2 " onClick={() => handleViewDetails(toy)}>
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {!showAll && (
                <div className="flex justify-center mt-4">
                    <button className="custom-button" onClick={handleSeeMore}>
                        See More
                    </button>
                </div>
            )}

            {selectedToy && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-8 max-w-5xl mx-auto rounded shadow-lg relative">
                        <button
                            className="absolute top-4 right-4 text-black hover:text-gray-800"
                            onClick={handleCloseModal}
                        >
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
                        <div className='grid md:grid-cols-5 grid-cols-1 gap-4 items-center '>
                            <div className='col-span-2 mx-auto'>
                                <img src={selectedToy.photo} alt='' className="md:w-40 w-20 " />
                            </div>


                            <div className='col-span-3'>
                                <p className="text-2xl leading-10 font-semibold">{selectedToy.figureName}</p>
                                <p className="leading-10 "><span className='font-bold'>Seller :</span> {selectedToy.sellerName}</p>
                                <p className="leading-8 "><span className='font-bold'>Price :</span> ${selectedToy.price}</p>
                                <p className="leading-7 "><span className='font-bold'>Details :</span> {selectedToy.details}</p>
                            
                            </div>
                        </div>


                    </div>
                </div>
            )}
        </div>
    );
};

export default AllToys;
