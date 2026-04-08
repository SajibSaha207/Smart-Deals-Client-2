import React from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {
    const product = useLoaderData();
    console.log(product)
    return (
        <div>
            {/* product info */}
            <div>
                <div>

                </div>
                <div>
                    <button className='btn btn-primary'>I want to buy this product</button>
                </div>
            </div>
            {/* bids for this product */}
        </div>
    );
};

export default ProductDetails;