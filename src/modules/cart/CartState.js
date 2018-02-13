import { Map } from 'immutable';
import { addValueInArray } from '../../utils/commonDataFormat';

export const ADD_TO_CART = 'ADD_TO_CART';

/**
 * Add To Cart on click of add to cart button
 * @param {int}  productId  Product Id
 * @return {Object}  Action
 */

export const addToCart = (productId) => {
  return dispatch => {
    dispatch({
      type: ADD_TO_CART,
      productId
    });
  };
};

/**
 * Define Intial values of cart state
 */

const initialState = Map({ cartProducts: [], cartCount: 0 }).toJS();

/**
 * Reducer: Update cart state.
 * @param  {Object} state cart
 * @param  {Object} action Action
 * @return {Object} Updated state.
 */

export default function CartStateReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartProducts: addValueInArray(state.cartProducts, action.productId),
        cartCount: state.cartCount + 1
      };
    default:
      return state;
  }
}

