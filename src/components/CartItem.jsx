import React, {use, useEffect} from 'react';
import {useContext} from "react";
import {CustomContext} from "../Content/Context.jsx";

const CartItem = ({title,price,id}) => {

    const {deleteFromCart} = useContext(CustomContext)
    const [quantity, setQuantity] = React.useState(1);

    const increaseQuantity = () => {
        setQuantity(prevState => prevState + 1);
    }

    const decreaseQuantity = () => {
        setQuantity(prevState => prevState - 1);
    }

    useEffect(() => {
      if ( quantity <= 0){
          deleteFromCart(id)
      }
    },[quantity])


    return (
        <li className='flex gap-2 justify-between'>
            <p onClick={()=>deleteFromCart(id)}>x</p>
            <p className='flex-1'>{title}</p>
            <p>{price} $</p>
            <p>Кол-во: {quantity}</p>
            <p onClick={increaseQuantity}>+</p>
            <p onClick={decreaseQuantity}>-</p>
        </li>
    );
};

export default CartItem;