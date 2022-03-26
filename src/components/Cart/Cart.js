import React from 'react';
import './Cart.css'
const Cart = ({cart, choose1ForMe, chooseAgain}) => {
    return (
        <div className='cart'>
            <h3>Selected Shoes</h3>
            {
            cart.map(item =><p key={item.id}>{item.name}</p>)
            }
            <button onClick={() => choose1ForMe(cart)}>Choose 1 for Me</button>
            <button onClick={() => {chooseAgain(cart)}}>Choose Again</button>

        </div>
    );
};

export default Cart;