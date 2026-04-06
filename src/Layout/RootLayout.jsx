import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Home/Banner/Banner';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;