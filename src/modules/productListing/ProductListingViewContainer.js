import ProductListingView from './ProductListingView';            //eslint-disable-line
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateActiveProdcuts, updateAllProdcuts } from './ProductListingState';
import { addToCart } from '../cart/CartState';
import {
  updateAvailableFilters,
  updateActiveFilters,
  updateProductByBrand,
  updateProductByPrice
} from '../filter/FilterState';

/**
 * Avails State to ProductListingView
 */

const mapStateToProps = state => ({
  activeProducts: state.productListing.activeProducts,
  allProducts: state.productListing.allProducts,
  cartProducts: state.cart.cartProducts,
  cartCount: state.cart.cartCount
});

/**
 * Maps dispatch and action ceators to ProductListingView
 */

const mapDispatchToProps = dispatch => bindActionCreators({
  updateAllProdcuts,
  updateAvailableFilters,
  updateActiveProdcuts,
  updateActiveFilters,
  updateProductByBrand,
  updateProductByPrice,
  addToCart
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListingView);

