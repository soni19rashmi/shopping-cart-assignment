import { ADD_TO_CART } from "./CartState";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};