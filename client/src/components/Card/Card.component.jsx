import React, { useContext } from 'react';

import ActionButton from '../ActionButton/ActionButton.component';
import CartContext from '../../context/cart.context';

import './Card.style.scss';

const Card = ({product}) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className='card-container'>
            <h3 className='title'>{product.name}</h3>
            <div className='card-content'>
                <img src={product.imageURL} alt={product.sku} />
                <div className='description'>{product.description}</div>
            </div>
            <div className='card-footer'>
                <strong className='price'>MRP&nbsp;Rs.{product.price}</strong>
                <ActionButton onClick={() => addToCart(product)} className='buy-now-btn desktop'>Buy Now</ActionButton>
                <ActionButton onClick={() => addToCart(product)} className='buy-now-btn mobile'>Buy Now @ Rs.{product.price}</ActionButton>
            </div>
        </div>
    );
}

export default Card;