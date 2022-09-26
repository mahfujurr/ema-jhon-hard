import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart-cont'>
            <h3>Order Summary</h3>
            <h4>Selected Items:{cart.length}</h4>
        </div>
    );
};

export default Cart;