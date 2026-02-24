import {createContext, useState, useEffect} from "react";
import React from 'react'
import products from "../components/Products.jsx";

export const CustomContext = createContext({});

export const Context = ({children}) => {

    const [product, setProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartSum, setCartSum] = useState(null);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setFilteredProducts(data)
            })
            .catch(err => console.log(err))
    }, [product])


    const addToCart = (id) => {
        const item = product.find(product => product.id === id);

        if (!cart.some(item => item.id === id)) {
            setCart([...cart, {...item, quantity: 1}]);
        }
    }

    const deleteFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const calculateTotal = (cart) => {
        return Math.round(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
    }

    const filterProduct = (e) => {
        const {value} = e.currentTarget;

        if (value === '') {
            setFilteredProducts(product);
        } else {
            const filtered = product.filter(item => item.category === value)
            setFilteredProducts(filtered);
        }

    }
    useEffect(() => {
        setCartSum(calculateTotal(cart))
    }, [cart])


    const value = {
        product,
        setProduct,
        cart,
        setCart,
        addToCart,
        deleteFromCart,
        cartSum,
        filterProduct,
        filteredProducts
    }
    return (
        <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
    )
}