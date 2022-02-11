import React, { useReducer } from 'react';
import CartContext from './cart.context';
import CartReducer from './CartReducer';

export const ADD_TO_CART = 'ADD_TO_CART';

const CartState = (props) => {
    const initialState = {
        cartItems: []
    };

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (item) => {
        try {
            dispatch({
                type: ADD_TO_CART,
                payload: [...state.cartItems, item]
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CartContext.Provider
          value={{
            cartItems: state.cartItems,
            addToCart,
          }}
        >
          {props.children}
        </CartContext.Provider>
      );
};

export default CartState;