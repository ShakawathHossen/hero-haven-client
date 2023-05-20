import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Providers/AuthProviders';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setMyToys] = useState([]);
  
  useEffect(() => {
    const url =`http://localhost:5000/toy?sellerEmail=${user?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data =>setMyToys(data))
  }, []);

  return (
      <div className='container mx-auto mt-14'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hero Haven - My Toys</title>
      
      </Helmet>
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
                        {mytoys.map((toy) => (
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
                                    <button className=" ">
                                        <img src="https://i.ibb.co/G08dvDK/edit-button.png" alt="" />
                                    </button>
                                    <button className="ml-4 ">
                                        <img src="https://i.ibb.co/b1ngMDt/delete-button.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  );
};

export default MyToys;
