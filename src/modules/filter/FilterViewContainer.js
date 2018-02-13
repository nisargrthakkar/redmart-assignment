import FilterView from './FilterView';            //eslint-disable-line
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateActiveProdcuts } from '../productListing/ProductListingState';
import { updateAvailableFilters,updateActiveFilters } from './FilterState';

/**
 * Avails State to FilterView
 */

const mapStateToProps = state => ({
  allProducts: state.productListing.allProducts,
  activeProducts: state.productListing.activeProducts,
  activeFilters: state.filter.activeFilters,
  availableFilters: state.filter.availableFilters,
  productByPrice: state.filter.productByPrice,
  productByBrand: state.filter.productByBrand
});

/**
 * Maps dispatch and action ceators to FilterView
 */

const mapDispatchToProps = dispatch => bindActionCreators({
  updateAvailableFilters,
  updateActiveProdcuts,
  updateActiveFilters
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterView);

