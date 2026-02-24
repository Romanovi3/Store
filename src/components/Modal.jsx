import React from 'react';
import {useRef, useEffect} from 'react';
import {CustomContext} from "../Content/Context.jsx";
import {useContext} from 'react'

const Modal = ({description, image, price, category, title, setModalIsOpen, id, modalIsOpen}) => {

    const {addToCart} = useContext(CustomContext);
    const ModalRef = useRef(null);


    useEffect(() => {

            const clickOutside = (e) => {
                if (ModalRef.current && !ModalRef.current.contains(e.target)) {
                    setModalIsOpen(false);
                }
            }

            const handleEscape = (e) => {
                if (e.key === 'Escape') {
                    setModalIsOpen(false);
                }
            }

            if (modalIsOpen) {
                window.addEventListener('mousedown', clickOutside);
                document.addEventListener('keydown', handleEscape);
            }

            return () => {
                window.removeEventListener('mousedown', clickOutside);
                document.removeEventListener('keydown', handleEscape);
            }
        }, [modalIsOpen, setModalIsOpen]
    )
    ;


    return (
        <div
            className='fixed inset-0 bg-black/50 transition-opacity duration-300  items-center justify-center z-50 flex flex-col'>
            <div
                ref={ModalRef}
                className='modal bg-white rounded-lg h-[50vh] max-w-2xl w-full transform transition-all duration-300 scale-100 opacity-100 flex p-5 gap-5 flex-wrap'>
                <button onClick={() => setModalIsOpen(modal => !modal)}
                        className='absolute top-2 right-4 text-red-700'>x
                </button>
                <div className="modal-img">
                    <img src={image} alt={title} className='object-contain w-50'/>
                </div>
                <div className="modal-info flex flex-col gap-5 flex-1">
                    <h3 className='text-xl'>{title}</h3>
                    <p className='text-slate-800'>{price}$ <span className='ml-5'>{category}</span></p>
                    <p className='italic text-slate-500 max-h-30 overflow-y-auto'>{description}</p>
                </div>
                <button
                    onClick={() => {
                        addToCart(id);
                        setModalIsOpen(false)
                    }}
                    className='cursor-pointer ring ring-emerald-600 rounded p-2 transition duration-200 ease-in-out hover:bg-emerald-600 hover:text-white basis-xl m-auto'>
                    Add to cart
                </button>
            </div>

        </div>
    );
};

export default Modal;