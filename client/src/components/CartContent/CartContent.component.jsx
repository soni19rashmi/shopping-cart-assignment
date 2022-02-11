import React from 'react';

import CartItem from '../CartItem/CartItem.component';

import './CartContent.style.scss';

const CartContent = ({items}) => {
    return (
        <div className='cart-content'>
            {items.map(item => (
                <CartItem key={item.id} cartItem={item} />
            ))}
            <div className='disclaimer'>
                <img src='/static/images/lowest-price.png' alt="Lowest Price" className='lowest-price-image' />
                <div className='text'>You won't find it cheaper anywhere</div>
            </div>
        </div>
    );
};

export default CartContent;