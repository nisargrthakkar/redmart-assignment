import CartView from './CartView';            //eslint-disable-line
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart } from './CartState';

/**
 * Avails State to CartView
 */

const mapStateToProps = state => ({
  cartProducts: state.cart.cartProducts,
  allProducts: state.productListing.allProducts
});

/**
 * Maps dispatch and action ceators to CartView
 */

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCart
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartView);
