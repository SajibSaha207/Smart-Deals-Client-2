import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Home/Banner/Banner';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
           
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;