import { Map } from 'immutable';
import productsData from '../../data/products';

export const UPDATE_ACTIVE_PRODUCT = 'UPDATE_ACTIVE_PRODUCT';

/**
 * Update Active Prodcuts.
 * @param {array}  activeProdcuts array of active Prodcuts Ids.
 * @return {Object}  Action.
 */

export const updateActiveProdcuts = (activeProducts) => {
  return dispatch => {
    dispatch({
      type: UPDATE_ACTIVE_PRODUCT,
      activeProducts
    });
  };
};

/**
 * Define Intial values of Product Listing state.
 */

const initialState = Map({
  allProducts: productsData,
  activeProducts: []
}).toJS();

/**
 * Reducer: Update Product Listing state.
 * @param  {Object} state Product Listing.
 * @param  {Object} action Action.
 * @return {Object} Updated state.
 */

export default function ProductListingStateReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ACTIVE_PRODUCT:
      return {
        ...state,
        activeProducts: action.activeProducts
      };
    default:
      return state;
  }
}

