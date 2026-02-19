import {createContext, useState, useEffect} from "react";
import React from 'react'

export const CustomContext = createContext({});

export const Context = ({children}) => {

    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err))
    }, [])

    const addToCart = () => {
        setCart(el => [...cart, el])
    }

    const value = {
        product,
        setProduct,
        cart,
        setCart,
    }
    return (
        <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
    )
}