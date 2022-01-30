import React from 'react';

// we have to create a cart conetxt
 export const CartContext =  React.createContext();

//Provider
//consumer

// CartContext.Provider

export const CartProvider = (props) => {

    const [cartValue, setCartValue] = React.useState([]);

    let addItemToCart = (item) => {
        setCartValue([...cartValue, item]);
        // console.log(cartValue.length)
    }
  
    return (
           <CartContext.Provider value={{cartValue, addItemToCart}}>
                {props.children}
           </CartContext.Provider>
    )
}


//redux(doesn't happen) and context(happens)
//bundle size increase.

