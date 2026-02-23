import React from 'react';
import {CustomContext} from "../Content/Context.jsx";
import {useContext} from 'react'

const Modal = ({description, image, price, category, title, setModalIsOpen, id, modalIsOpen}) => {

    const {addToCart} = useContext(CustomContext);

    window.addEventListener('keydown', (e) => {
        e.key === 'Escape' && modalIsOpen ? setModalIsOpen(false) : false;
    })


    return (
        <div className='modal absolute bg-white p-6 rounded-lg z-1000 top-70 left-155 w-[35vw] h-[50vh]  flex flex-col shadow-[0_0_200px_100px_black] justify-between'>
            <div className='flex gap-5'>
                <button onClick={() => setModalIsOpen(modal => !modal)}
                        className='absolute top-2 right-4 text-red-700'>x
                </button>
                <div className="modal-img">
                    <img src={image} alt={title} className='h-48 w-50 object-contain'/>
                </div>
                <div className="modal-info flex flex-col gap-5 w-50 px-4 flex-2">
                    <h3 className='text-xl'>{title}</h3>
                    <p className='text-slate-800'>{price}$ {category}</p>
                    <p className='italic text-slate-500 h-[50%] overflow-y-auto'>{description}</p>
                </div>
            </div>
            <button
                onClick={() => addToCart(id)}
                className='cursor-pointer ring ring-emerald-600 rounded p-2 transition duration-200 ease-in-out hover:bg-emerald-600 hover:text-white'>
                Add to cart
            </button>
        </div>
    );
};

export default Modal;