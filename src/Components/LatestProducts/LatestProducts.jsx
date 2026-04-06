import React, { use } from 'react';
import Product from '../Product/Product';

const LatestProducts = ({ latestProductsPromise }) => {
    const product = use(latestProductsPromise);

    return (
        <div>
            <h2 className='text-5xl'>
                Recent <span className='text-primary'>Product</span>
            </h2>

            <div>
                {product?.map(p => (
                    <Product key={p._id} product={p} />
                ))}
            </div>
        </div>
    );
};

export default LatestProducts;