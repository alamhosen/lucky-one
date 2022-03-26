import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // add to cart product
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exits = cart.find(product => product.id === selectedProduct.id);
        if(!exits){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);   
            exits.quantity = exits.quantity + 1;
            newCart = [...rest, exits];
        }
        setCart(newCart);
    }
    // choose one for me
    const choose1ForMe = (cart) => {
        const luckyOne = cart[Math.floor(Math.random() * cart.length)];
        setCart([luckyOne]);

    }
    // clear cart
    const chooseAgain = (cart) => {
        setCart([]);
    };

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    choose1ForMe={choose1ForMe}
                    chooseAgain={chooseAgain}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;