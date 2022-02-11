import React, { useState } from 'react';

import './CartItem.style.scss';

const CartItem = ({cartItem}) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='cart-item'>
            <img
                src={cartItem.imageURL}
                alt={cartItem.name}
                className='item-image'
            />
            <div className='item-details'>
                <h4>{cartItem.name}</h4>
                <div className='item-price'>
                    <div className='price-calc'>
                        <span
                            className={`minus-btn ${quantity === 1 ? 'disabled' : ''}`}
                            onClick={() => setQuantity(quantity-1)}
                        >
                            -
                        </span>
                        <span>{quantity}</span>
                        <span
                            className={`plus-btn ${quantity === cartItem.stock ? 'disabled' : ''}`}
                            onClick={() => setQuantity(quantity+1)}
                        >
                            +
                        </span>
                        <span>X</span>
                        <span>{cartItem.price}</span>
                    </div>
                    <div className='total-price'>Rs.{cartItem.price * quantity}</div>
                </div>
            </div>
            
        </div>
    );
};

export default CartItem;