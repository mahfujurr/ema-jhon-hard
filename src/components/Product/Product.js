import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, img, price, ratings, seller} = props.product;
    return (
        <div className='single-productfull'>
            <div className='single-product-container'>
                    <img src={img} alt="" />
                    <p className='name'>{name}</p>
                <div>
                    <p className='p-details'>Price: ${price}</p>
                    <p className='p-details'>Manufacturer : {seller}</p>
                    <p className='p-details'>Ratings : {ratings}</p>
                </div>
            
            </div>
            <button onClick={ ()=>{props.addToHandleCart(props.product)}} className='button-cart'>
                    Add to cart
            </button>
            
        </div>
    );
};

export default Product;