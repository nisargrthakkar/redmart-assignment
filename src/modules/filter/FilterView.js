import React, { Component } from 'react';  //eslint-disable-line
import { getCommonValues, doFirstLetterCapital } from '../../utils/commonDataFormat';

class FilterView extends Component {

  /**
   * on check box values change
   * @param {obj} checkbox event object
   */

  onValueChange(event) {
    const elemRef = event.target;
    if (event.target.checked) {
      this.getProductsByFilters(elemRef.value, elemRef.dataset.filter, 'add');
    } else {
      this.getProductsByFilters(elemRef.value, elemRef.dataset.filter, 'remove');
    }
  }

  /**
   * Make active product array based in filter checkbox value change
   * @param {string} filter values like marigold or 0-0.99
   * @param {string} filter name like price or brand
   * @param {string} flag for add new filter or remove filter
   */

  getProductsByFilters(filterValue, filterName, flag) {
    let products = [];
    let isFilterApplied = false;
    const activeFilters = this.props.activeFilters;

    if (flag === 'add') {
      isFilterApplied = true;
      activeFilters[filterName].push(filterValue);
    } else if (flag === 'remove') {
      isFilterApplied = true;
      activeFilters[filterName].splice(activeFilters[filterName].indexOf(filterValue), 1);
    }
    this.props.updateActiveFilters(activeFilters);
    for (const filter in activeFilters) {
      if (filter) {
        products[filter] = [];
        for (const activeFilter of activeFilters[filter]) {
          products[filter] = products[filter].concat(this.props[`productBy${doFirstLetterCapital(filter)}`][`${activeFilter}`]);
        }
      }
    }
    products = getCommonValues(products.brand, products.price);
    if ((activeFilters.brand.length <= 0 && activeFilters.price.length <= 0)) {
      this.props.updateActiveProdcuts(Object.keys(this.props.allProducts.products).map(Number));
    } else if (isFilterApplied && products.length > 0) {
      this.props.updateActiveProdcuts(products);
    } else if (isFilterApplied && products.length <= 0) {
      this.props.updateActiveProdcuts(products);
    } else {
      this.props.updateActiveProdcuts(Object.keys(this.props.allProducts.products).map(Number));
    }
  }

  /**
   * Render filter option
   * @return {JSX} Rendered filter option
   */

  generateFilterOptions(filterName, options) {
    return options.map((option) => (
      <div key={option} className='filterOption'>
        <label>
          <input
            type='checkbox'
            value={option}
            defaultChecked={
              this.props.activeFilters[`${filterName}`].indexOf(option) >= 0 && this.props.activeProducts.length > 0
            }
            onClick={(event) => this.onValueChange(event)}
            data-filter={filterName}
          />
          <span>{option}</span>
        </label>
      </div>
    ));
  }

  /**
   * Render main title of filter
   * @return {JSX} Rendered main title of filter
   */

  renderFilter() {
    return Object.keys(this.props.availableFilters).map((filterName) => (
      <div className='filterUnit' key={filterName}>
        <h2>{filterName}</h2>
        <div className='filterOptions'>
          {this.generateFilterOptions(filterName, this.props.availableFilters[`${filterName}`])}
        </div>
      </div>
    ));
  }

  /**
   * Render Filter
   * @return {JSX} Rendered Filter
   */

  render() {
    return (
      <div className='filterSection'>
        {this.renderFilter()}
      </div>

    );
  }
}
export default FilterView;
