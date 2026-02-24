import React from 'react';
import {useContext} from 'react';
import CartItem from '../components/CartItem.jsx'
import {CustomContext} from '../Content/Context.jsx';


const Cart = ({cartIsOpen, setCartIsOpen}) => {

    const {cart, cartSum} = useContext(CustomContext);

    const closeCart = (e) => {
        if (e.key === 'Escape') {
            setCartIsOpen(false)
        }
    }

    window.addEventListener('keydown', closeCart);
    return (
        <div className='fixed top-20 right-30 bg-emerald-700/90 h-96 w-150 rounded-md text-white'>
            <div className="cart px-7 text-lg">
                <h3 className='text-center text-2xl mt-5 mb-5'>Корзина</h3>
                {cart.length ?
                    <ul className='overflow-y-auto h-55 '>
                        {cart.map(item => (
                            <CartItem
                                key={item.id}
                                {...item}
                            />

                        ))}
                    </ul> : <h2 className='text-4xl text-center mt-5'>Здесь пока пусто...</h2>}
                {cart.length ? <h3 className='text-center text-xl mt-5 mb-0'>Итого: {cartSum} $ </h3> : null}

            </div>

        </div>
    );
};

export default Cart;