import './CartItem.css'
import React from 'react'

const CartItem = (props) => {
    const {img, author} = props.product
    return (
        <div>
            <div className="cart-item-list">
                <img className="cart-item-img" src={img} alt="" />
                <h5>{author}</h5>
                <span className="close-btn">&times;</span>
            </div>
        </div>
    )
}

export default CartItem
