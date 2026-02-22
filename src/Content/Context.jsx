import {createContext, useState, useEffect} from "react";
import React from 'react'
import products from "../components/Products.jsx";

export const CustomContext = createContext({});

export const Context = ({children}) => {

    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err))
    }, [])


    const increaseQuantity = () => {
        setQuantity(prevState => prevState + 1);
    }

    const decreaseQuantity = () => {
        setQuantity(prevState => prevState - 1);
    }


    const addToCart = (id) => {
        const item = product.find(product => product.id === id);

         if (!cart.some(item => item.id === id)){
            setCart([...cart, {...item, quantity: 1}]);
        }
    }

    const deleteFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const value = {
        product,
        setProduct,
        cart,
        setCart,
        addToCart,
        deleteFromCart,
        quantity,
        setQuantity,
        increaseQuantity,
        decreaseQuantity,
    }
    return (
        <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
    )
}