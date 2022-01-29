import React from 'react';
import cart from '../../images/carts.png'
import './Cart.css'

function Cart()  {
    return (
        <div className='cart-wrapper'>
            <img src={cart} alt="cart-img" />
            <span>1</span>
        </div>
    )
}

export default Cart;