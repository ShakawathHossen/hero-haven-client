import React from 'react';
import Banner from '../Banner/Banner';
import PopularThemes from '../PopularThemes/PopularThemes';
import AboutStore from '../AboutStore/AboutStore';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutStore/>
            <PopularThemes/>
        </div>
    );
};

export default Home;