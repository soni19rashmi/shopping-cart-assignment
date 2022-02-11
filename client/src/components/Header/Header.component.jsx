import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContent from '../CartContent/CartContent.component';
import ActionButton from '../ActionButton/ActionButton.component';
import Modal from '../Modal/Modal.component';

import CartContext from '../../context/cart.context';
import {ReactComponent as CartImage} from '../../assets/cart.svg';

import './Header.style.scss';

const Header = ({}) => {
    const [showCart, setShowCart] = useState(false);

    const { cartItems } = useContext(CartContext);

    return (
        <React.Fragment>
            <header>
                <div className='logo'>
                    <Link to='/'>
                        <img src='/static/images/logo.png' alt='Sabka Bazaar Logo' />
                    </Link>
                </div>
                <nav>
                    <ul className='left-nav'>
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/products'>Products</Link>
                        </li>
                    </ul>
                    <div className='right-nav'>
                        <ul>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/signup'>Signup</Link>
                            </li>
                        </ul>

                        <span className='cart-tab' onClick={() => setShowCart(true)}>
                            <CartImage className='cart-image' fill='#bf2957' />&nbsp;{cartItems.length}&nbsp;items
                        </span>
                    </div>
                </nav>
            </header>

            <Modal show={showCart} onClose={() => setShowCart(false)}>
                <div className='modal-header'>
                    <span>My Cart ({cartItems.length} items)</span>
                    <span className='close-button' onClick={() => setShowCart(false)}>+</span>
                </div>
                <div className='modal-content'>
                    {!cartItems.length && (
                        <div className='empty-cart'>
                            <h4>No items in your cart</h4>
                            <p>Your favourite items are just a click away</p>
                        </div>
                    )}
                    {!!cartItems.length && (
                        <CartContent items={cartItems} />
                    )}
                </div>
                <div className='modal-footer'>
                    {!cartItems.length && (
                        <ActionButton className='start-shopping-button'>Start Shopping</ActionButton>
                    )}
                    {!!cartItems.length && (
                        <>
                            <p>Promo code can be applied on payment page</p>
                            <ActionButton className='proceed-checkout-button'>
                                <span>Proceed to Checkout</span>
                                <span>Rs.187&nbsp;{`>`}</span>
                            </ActionButton>
                        </>
                    )}
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default Header;