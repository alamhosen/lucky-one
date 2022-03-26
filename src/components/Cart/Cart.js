import React from 'react';
import './Cart.css'
const Cart = ({cart, choose1ForMe, chooseAgain}) => {
    console.log(cart);
    // let quantity = 0;
    // const name = 0;
    // for (const product of cart){
    //     console.log(product.name);
    //  const name = product.quantity;
    //     return name;
    // }

  

    return (
        <div className='cart'>
            <h3>Selected Shoes</h3>

            {
            cart.map(item =><p key={item.id}>{item.name}</p>)
            }
           {/* <p>{name}</p> */}
                   <button onClick={() => choose1ForMe(cart)}>Choose 1 for Me</button>
                   <button onClick={() => {chooseAgain(cart)}}>Choose Again</button>

        </div>
    );
};

export default Cart;