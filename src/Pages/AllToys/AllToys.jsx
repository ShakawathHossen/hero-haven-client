import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaBeer, FaUser, FaUserCircle } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const [showAll, setShowAll] = useState(false);
    const alltoys = useLoaderData();
    const [searchValue, setSearchValue] = useState('');

    const displayedToys = showAll ? alltoys : alltoys.slice(0, 6);

    const handleSeeMore = () => {
        setShowAll(true);
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
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
                                    <button className="custom-button2">
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
        </div>
    );
};

export default AllToys;
