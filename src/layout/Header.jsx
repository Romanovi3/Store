import React from 'react';
import Cart from '../components/Cart.jsx'
import cartIcon from '../assets/cart.png'
import {useState} from 'react'

const Header = () => {

    const [cartIsOpen, setCartIsOpen] = useState(false);


    return (
        <nav className='flex items-center justify-between bg-slate-500/60 px-10 py-5 sticky top-0 z-1000'>
            <h2 className='text-xl text-zinc-600'>StoreProject</h2>
            <div className="flex gap-5">
                <img
                    src={cartIcon}
                    alt="cartIcon"
                    className='cartIcon w-10 h-6 transition duration-300 ease-in-out hover:scale-110 cursor-pointer active:scale-110'
                    onClick={() => setCartIsOpen(!cartIsOpen)}
                />
                {cartIsOpen && (
                    <Cart
                        cartIsOpen={cartIsOpen}
                        setCartIsOpen={setCartIsOpen}
                    />
                )}
                <p
                    className='transition duration-300 ease-in-out hover:scale-110 text-zinc-600 hover:text-white'>
                    <a href="https://github.com/Romanovi3/Store" target='_blank'>Repo</a>
                </p>

            </div>
        </nav>
    );
};

export default Header;