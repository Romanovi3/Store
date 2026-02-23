import React, {useEffect, useState} from 'react';
import zaglushka from '../assets/zaglushka.png'
import Modal from './Modal.jsx'
import {useContext} from "react";
import {CustomContext} from "../Content/Context.jsx";

const ProductItem = (props) => {

    const {title, description, price, image, category, setCart, id} = props;
    const {addToCart} = useContext(CustomContext)

    const [modalIsOpen, setModalIsOpen] = useState(false);



    return (
        <div>
            <div className='item-card flex flex-col'>
                <img src={zaglushka} alt={title} className='h-60 w-96 object-cover'/>
                <p className='flex-1 px-2 italic font-bold'>{title}</p>
                <p className='flex item-center gap-5 flex-row px-2 mt-2'>
                    <span className='text-teal-400'>{price} $</span>
                    <span className='italic text-slate-400'>{category}</span>
                </p>
                <div className="buttons">
                    <button onClick={() => addToCart(id)}>Add to cart</button>
                    <button onClick={() => setModalIsOpen(modal => !modal)}>More info</button>
                </div>
            </div>
                { modalIsOpen && (<Modal
                    setModalIsOpen={setModalIsOpen}
                    description={description}
                    image={image}
                    category={category}
                    title={title}
                    price={price}
                    id={id}
                    modalIsOpen={modalIsOpen}
                />)}
        </div>
    );
};

export default ProductItem;