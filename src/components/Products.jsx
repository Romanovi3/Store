import React from 'react';
import {useContext} from 'react'
import {CustomContext} from "../Content/Context.jsx";
import ProductItem from "./ProductItem.jsx";



const Products = () => {
    const {product} = useContext(CustomContext);

    return (
        <div className='grid grid-cols-4 gap-5 w-6xl mt-15 mx-auto h-[80vh] overflow-y-auto'>
            {!product.length ? <h2 className='text-4xl mx-auto col-span-4 mt-10'>Loading...</h2> :
                product.map(el => {
                    return <ProductItem key={el.id} {...el} />
                })}
        </div>
    );
};

export default Products;