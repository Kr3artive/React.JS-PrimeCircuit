import React, { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const ItemTotal = cart.reduce((acc, currentItem) => {
            return acc + currentItem.price * currentItem.amount;
        }, 0);
        setTotal(ItemTotal);
    }, [cart]);  // Add cart as a dependency

    const addtoCart = (product, id) => {
        const Item = { ...product, amount: 1 };
        const Cartitem = cart.find((item) => item.id === id);
        // after finding if the item.id is equal to the product id
        if (Cartitem) {
            const newCartItem = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: Cartitem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCartItem);
        } else {
            setCart([...cart, Item]);
        }
    };

    const removeFromCart = (id) => {
        const removeitem = cart.filter((item) => item.id !== id);
        setCart(removeitem);
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalItems = cart.reduce((acc, item) => acc + item.amount, 0);

    const increaseAmount = (id) => {
        const CartItem = cart.find((item) => item.id === id);
        if (CartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: CartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
    };

    const decreaseAmount = (id) => {
        const CartItem = cart.find((item) => item.id === id);
        if (CartItem.amount > 1) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return { ...item, amount: CartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            removeFromCart(id);
        }
    };

    return (
        <CartContext.Provider value={{cart, total, decreaseAmount, addtoCart, removeFromCart, clearCart, totalItems, increaseAmount }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
