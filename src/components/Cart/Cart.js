import React from 'react';
import { CartContext } from '../../context/cartContext';
import cart from '../../images/carts.png'
import './Cart.css'

function Cart(props)  {
    let result = React.useContext(CartContext)
    return (
        <div className='cart-wrapper'>
            <img src={cart} alt="cart-img" />
            <span>{result.cartValue.length}</span>
        </div>
    )
}

export default Cart;