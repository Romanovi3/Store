import React, {useEffect, useState} from 'react';
import zaglushka from '/src/assets/zaglushka.png'
import Modal from './Modal.jsx'
import {useContext} from "react";
import {CustomContext} from "../Content/Context.jsx";

const ProductItem = (props) => {

    const {title, description, price, image, category, setCart, id} = props;
    const {addToCart} = useContext(CustomContext)

    const [modalIsOpen, setModalIsOpen] = useState(false);


    return (
        <div>
            <div className='item-card flex flex-col min-h-[2vh]'>
                <img src={zaglushka} alt={title} className='h-60 w-96 object-cover'/>
                <p className='px-2 italic font-bold text-center h-18 overflow-y-hidden'>{title}</p>
                <p className='flex item-center gap-5 flex-row px-2 justify-center mt-auto'>
                    <span className='text-emerald-600'>{price} $</span>
                    <span className='italic text-slate-400'>{category}</span>
                </p>
                <div className="buttons flex gap-5 justify-center px-2 mt-2 mb-2">
                    <button onClick={() => addToCart(id)}
                            className='cursor-pointer ring ring-emerald-600 rounded p-2 transition duration-200 ease-in-out hover:bg-emerald-600 hover:text-white basis-sm m-auto'>Add
                        to cart
                    </button>
                    <button onClick={() => setModalIsOpen(modal => !modal)}
                            className='cursor-pointer ring ring-emerald-600 rounded p-2 transition duration-200 ease-in-out hover:bg-emerald-600 hover:text-white basis-sm m-auto'>More
                        info
                    </button>
                </div>
            </div>
            {modalIsOpen && (<Modal
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