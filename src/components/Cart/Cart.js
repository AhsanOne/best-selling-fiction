import './Cart.css'
import React from 'react'
import CartItem from '../CartItem/CartItem'

export const Cart = (props) => {
    const { cart } = props
    let total = 0
    cart.forEach(product => {
        total += product.allBooksPrice
    })
    return (
        <div className="cart">
            <h4>Orderd Item: {cart.length}</h4>
            <h4>Total: {total}</h4>
            <div>
                {
                    cart.map(product => <CartItem product={product}></CartItem>)
                }
            </div>
            <button className='process-order-btn'>Process Order</button>
        </div>
    )
}
