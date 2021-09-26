import './Shop.css'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import { Cart } from '../Cart/Cart'

const Shop = () => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('fiction.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = product => {
        const addCartItems = [...cart, product]
        setCart(addCartItems)
    }
    return (
        <div>
            <main className="shop">
                <section className="product-wrapper">
                    {
                        products.map(product => <Product handleAddToCart={handleAddToCart} key={product.key} product={product} />)
                    }
                </section>
                <section className="cart-wrapper">
                    {
                        <Cart cart={cart}></Cart>
                    }
                </section>
            </main>
        </div>
    )
}

export default Shop
