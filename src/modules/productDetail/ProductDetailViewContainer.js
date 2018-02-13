import ProductDetailView from './ProductDetailView';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart } from '../cart/CartState';

/**
 * Avails State to ProductDetailView
 */

const mapStateToProps = state => ({
  allProducts: state.productListing.allProducts,
  cartProducts: state.cart.cartProducts,
  cartCount: state.cart.cartCount
});

/**
 * Maps dispatch and action ceators to ProductDetailView
 */

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCart
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailView);
