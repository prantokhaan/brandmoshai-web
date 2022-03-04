import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div  className='header px-5 pb-4'>
            <Navbar />
            <Banner />
        </div>
    );
};

export default Header;