import React from 'react';
import Banner from '../Banner/Banner';
import PopularThemes from '../PopularThemes/PopularThemes';
import AboutStore from '../AboutStore/AboutStore';
import WhyShop from '../WhyShop/WhyShop';

const Home = () => {
    return (
        <div>
            
            <Banner/>
            <AboutStore/>
            <PopularThemes/>
            <WhyShop/>
            
        </div>
    );
};

export default Home;