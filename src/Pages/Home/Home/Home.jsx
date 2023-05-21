import React from 'react';
import Banner from '../Banner/Banner';
import PopularThemes from '../PopularThemes/PopularThemes';
import AboutStore from '../AboutStore/AboutStore';
import WhyShop from '../WhyShop/WhyShop';
import { Helmet } from 'react-helmet';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Hero Haven-Home</title>
            </Helmet>
            
            <Banner/>
            <AboutStore/>
            <Category/>
            <PopularThemes/>
            <WhyShop/>
            
        </div>
    );
};

export default Home;