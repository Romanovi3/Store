import  {useEffect} from 'react';
import {useContext} from "react";
import {CustomContext} from "../Content/Context.jsx";

const CartItem = ({title,price,id,quantity}) => {

    const {deleteFromCart, increaseQuantity, decreaseQuantity} = useContext(CustomContext)


    useEffect(() => {
      if ( quantity <= 0){
          deleteFromCart(id)
      }
    },[quantity])


    return (
        <li className='flex gap-2 justify-between'>
            <p onClick={()=>deleteFromCart(id)} className='cursor-pointer'>x</p>
            <p className='flex-1'>{title}</p>
            <p>{price} $</p>
            <p>Кол-во: {quantity}</p>
            <p onClick={increaseQuantity} className='cursor-pointer'>+</p>
            <p onClick={decreaseQuantity} className='cursor-pointer'>-</p>
        </li>
    );
};

export default CartItem;