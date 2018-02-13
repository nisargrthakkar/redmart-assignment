import React, { Component } from 'react';  //eslint-disable-line
import { initProductsByFilter } from '../../utils/commonDataFormat';
import ListView from '../../component/List/ListView';
import FilterView from '../filter/FilterViewContainer';

class ProductListingView extends Component {

  componentDidMount() {
    if (this.props.activeProducts.length <= 0) {
      const allProductsData = initProductsByFilter(this.props.allProducts);
      this.props.updateAvailableFilters(allProductsData.availableFilters);
      this.props.updateActiveFilters(allProductsData.activeFilters);
      this.props.updateProductByBrand(allProductsData.byBrand);
      this.props.updateProductByPrice(allProductsData.byPrice);
      this.props.updateActiveProdcuts(Object.keys(this.props.allProducts.products).map(Number));
    }
  }

  /**
   * Render Product Listing Page
   * @return {JSX} Rendered Product Listing Page
   */

  render() {
    return (
      <div className='container'>
        <div className='filterSectionWrapper'>
          <FilterView />
        </div>
        <div className='productsGrid' >
          {this.props.activeProducts.length > 0
            ? (
              <ListView
                key={this.props.cartCount}
                allProducts={this.props.allProducts.products}
                activeProducts={this.props.activeProducts}
                addToCart={this.props.addToCart}
                cartProducts={this.props.cartProducts}
              />
            )
            : <p className="errorMsg">Sorry, There is no product for selected filter</p>
          }
        </div>
      </div>
    );
  }
}
export default ProductListingView;
