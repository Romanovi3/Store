import React from 'react';
import cartIcon from '../assets/cart.png'

const Cart = ({ cartIsOpen,setCartIsOpen }) => {


    const closeCart = (e) =>{
        if (e.key === 'Escape'){
            setCartIsOpen(false)
        }

    }
    return (
        <div className='fixed top-20 right-30 bg-emerald-700/90 h-96 w-150 rounded-md text-white'>
            <div className="cart px-7 text-lg">
                <h3 className='text-center text-2xl mt-5'>Корзина</h3>
                <ul>
                    <li className='flex '>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Кол-во: </p>
                        <p>+</p>
                        <p>-</p>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Cart;