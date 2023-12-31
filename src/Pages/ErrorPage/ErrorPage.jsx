import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hero Haven-Error404</title>
            </Helmet>
             <section className='flex flex-col items-center justify-center h-screen p-16  text-gray-900'>
        {/* <img className='w-4/12' src="/src/assets/404 error lost in space-cuate.png" alt="" /> */}
        <img className='animate-bounce' src="https://i.ibb.co/SKdXnZv/102863010-legoimage-removebg-preview.png" alt="" />
        <button className='custom-button'><Link to="/">Back To Home</Link></button>
    </section>
        </div>
    );
};

export default ErrorPage;