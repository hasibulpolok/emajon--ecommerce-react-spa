import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    <h2>Products: {products.length}</h2>
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h3>Order Summary</h3>
                    <h3>Items Orders:</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;