import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const { author, img, minSales, maxSales, numberOfBooks, allBooksPrice } = props.product
    return (
        <div className='product-card'>
            <div className="product">
                <div>
                    <p><strong>Author: </strong><small>{author}</small></p>
                    <p><strong>Min Sales:</strong> <small>{minSales}</small></p>
                    <p><strong>Max Sales:</strong> <small>{maxSales}</small></p>
                    <p><strong>Numbers Of Books:</strong> <small>{numberOfBooks}</small></p>
                    <p><strong>All Books Price:</strong> <small>{allBooksPrice}</small></p>
                </div>
                <img className="author-image" src={img} alt="" />
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular"><FontAwesomeIcon icon={faShoppingCart} /> BUY ALL BOOKS</button>
        </div>
    )
}

export default Product
