import { Map } from 'immutable';

export const UPDATE_FILTER_DETAIL = 'UPDATE_FILTER_DETAIL';
export const UPDATE_ACTIVE_FILTER = 'UPDATE_ACTIVE_FILTER';
export const UPDATE_PRODUCT_BY_BRAND = 'UPDATE_PRODUCT_BY_BRAND';
export const UPDATE_PRODUCT_BY_PRICE = 'UPDATE_PRODUCT_BY_PRICE';

/**
 * Update Available Filters
 * @param {array}  availableFilters
 * @return {Object}  Action
 */

export const updateAvailableFilters = (availableFilters) => {
  return dispatch => {
    dispatch({
      type: UPDATE_FILTER_DETAIL,
      availableFilters
    });
  };
};

/**
 * Update Active Filters
 * @param {array}  activeFilters array of active filtes
 * @return {Object}  Action
 */

export const updateActiveFilters = (activeFilters) => {
  return dispatch => {
    dispatch({
      type: UPDATE_ACTIVE_FILTER,
      activeFilters
    });
  };
};

/**
 * Update Product List Brand
 * @param {array}  productByBrand array of product id by brand
 * @return {Object}  Action
 */

export const updateProductByBrand = (productByBrand) => {
  return dispatch => {
    dispatch({
      type: UPDATE_PRODUCT_BY_BRAND,
      productByBrand
    });
  };
};

/**
 * Update Product List Price
 * @param {array}  productByPrice array of product id by price
 * @return {Object}  Action
 */

export const updateProductByPrice = (productByPrice) => {
  return dispatch => {
    dispatch({
      type: UPDATE_PRODUCT_BY_PRICE,
      productByPrice
    });
  };
};

/**
 * Define Intial values of filter state
 */

const initialState = Map({
  activeFilters: {},
  productByPrice: {},
  productByBrand: {},
  availableFilters: {}
}).toJS();

/**
 * Reducer: Update filter state.
 * @param  {Object} state filter
 * @param  {Object} action Action
 * @return {Object} Updated state.
 */

export default function FilterStateReducer(state = initialState, action) {
  switch (action.type) {

    case UPDATE_FILTER_DETAIL:
      return {
        ...state,
        availableFilters: action.availableFilters
      };

    case UPDATE_ACTIVE_FILTER:
      return {
        ...state,
        activeFilters: action.activeFilters
      };
    case UPDATE_PRODUCT_BY_BRAND:
      return {
        ...state,
        productByBrand: action.productByBrand
      };
    case UPDATE_PRODUCT_BY_PRICE:
      return {
        ...state,
        productByPrice: action.productByPrice
      };

    default:
      return state;
  }
}

