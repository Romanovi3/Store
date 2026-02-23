import {useEffect, useState} from 'react';
import {useContext} from "react";
import {CustomContext} from "../Content/Context.jsx";

const CartItem = ({title, price, id}) => {

    const {deleteFromCart} = useContext(CustomContext)


    return (
        <li className='flex gap-2 justify-between'>
            <p onClick={() => deleteFromCart(id)} className='cursor-pointer'>x</p>
            <p className='flex-1'>{title}</p>
            <p>{price} $</p>
        </li>
    );
};

export default CartItem;