import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ProductListingStateReducer from '../modules/productListing/ProductListingState';
import FilterStateReducer from '../modules/filter/FilterState';
import CartStateReducer from '../modules/cart/CartState';

export default combineReducers({
  router: routerReducer,
  productListing: ProductListingStateReducer,
  filter: FilterStateReducer,
  cart: CartStateReducer
});
