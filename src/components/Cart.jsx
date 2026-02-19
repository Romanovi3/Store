import React from 'react';
import cartIcon from '../assets/cart.png'

const Cart = ({ cartIsOpen,setCartIsOpen }) => {


    const closeCart = (e) =>{
        if (e.key === 'Escape'){
            setCartIsOpen(false)
        }

    }
    return (
        <div className='fixed top-20 right-30 bg-blue-400/90 h-96 w-150 rounded-md'>
            <div className="cart">
                <h3>Корзина</h3>
            </div>

        </div>
    );
};

export default Cart;