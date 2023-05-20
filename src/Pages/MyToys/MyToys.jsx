import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import MyToySingle from './MyToySingle';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [loadedtoys, setLoadedToys] = useState([]);
  const [myToys, setMyToys] = useState(loadedtoys);
  

  useEffect(() => {
    const url = `http://localhost:5000/toy?sellerEmail=${user?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setLoadedToys(data))
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

        </table>


        {
          loadedtoys.map((toy) => <MyToySingle
            key={toy._id}
            toy={toy}
            myToys={myToys}
            setMyToys={setMyToys}
          ></MyToySingle>)
        }
      </div>
    </div>
  );
};

export default MyToys;
