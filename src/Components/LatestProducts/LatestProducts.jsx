import React, { use } from 'react';
import Product from '../Product/Product';

const LatestProducts = ({ latestProductsPromise }) => {
    const product = use(latestProductsPromise);

    return (
        <div>
            <h2 className='text-5xl text-center mt-5'>
                Recent <span className='text-primary'>Product</span>
            </h2>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3'>
                {product?.map(p => (
                    <Product key={p._id} product={p} />
                ))}
            </div>
        </div>
    );
};

export default LatestProducts;