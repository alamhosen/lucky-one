import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    
    const {name, price, img, ratings} = product;
    return (
        <div className='product'>
             <img style={{width:'286px', margin:'7px'}} src={img} alt=""></img>
            <div className='product-info'>
             <h4 className='product-name'>{name}</h4>
             <p>Price: ${price}</p>
             <p><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;