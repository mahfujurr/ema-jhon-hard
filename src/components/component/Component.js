import React from 'react';
import './Component.css';
import logo from '../../images/Logo.svg'
const Component = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-links'>
                <a href="/order">Order</a>
                <a href="/order-review">Oder Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Component;