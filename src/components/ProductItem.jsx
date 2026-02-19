import React from 'react';
import zaglushka from '../assets/zaglushka.png'

const ProductItem = (props) => {

    const {title, description, price, image, category, setCart} = props;



    return (
        <div className='flex flex-col'>
            <img src={zaglushka} alt={title} className='h-60 w-96 object-cover'/>
            <p className='flex-1 px-2 italic font-bold'>{title}</p>
            <p className='flex item-center gap-5 flex-row px-2 mt-2'>
                <span>{price} $</span>
                <span className='italic'>{category}</span>
            </p>
            <div className="buttons">
                <button>Add to cart</button>
                <button>More info</button>
            </div>

        </div>
    );
};

export default ProductItem;