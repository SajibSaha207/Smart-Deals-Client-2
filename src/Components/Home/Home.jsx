import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';
import Banner from './Banner/Banner';

const latestProductsPromise = fetch('http://localhost:3000/latest-products').
then(res => res.json());
const Home = () => {
    return (
        <div>
             <Banner></Banner>
            <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
        </div>
    );
};

export default Home;