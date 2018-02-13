import React, { Component } from 'react';  //eslint-disable-line
import { history } from '../../redux/store';

class ListView extends Component {

  /**
   * Render Product List View
   * Pass param from parent component
   * @param {Array} allProducts  All products list
   * @param {Array} activeProducts  active prodcut id array
   * @param {Array} cartProducts  cart prodcut id array
   * @param {function} addToCart  add to cart funcation
   * @return {JSX} Rendered Product List View
   */

  render() {
    const allProducts = this.props.allProducts;
    const activeProducts = this.props.activeProducts;
    const cartProducts = this.props.cartProducts;

    return activeProducts.map((value) => {
      return (
        <div className="productWrapper" key={value}>
          <div>
            <a onClick={() => history.push(`/product?id=${value}`)} >
              <div>
                <div className="productImg">
                  <img src={require(`../../images/products/${allProducts[value].image}`)} alt={allProducts[value].name} />
                </div>
                <div className="productName" >
                  <span>{allProducts[value].name}</span>
                </div>
                <div className="productMeasurement" >
                  <span>{allProducts[value].measurement}</span>
                </div>
              </div>
            </a>
            <div className="priceCartWrapper">
              <div className="productPrice">
                <span>{allProducts[value].price}</span>
              </div>
              { !cartProducts.includes(value)
                ? <div className="addToCart">
                  <button className="addToCartBtn" onClick={() => this.props.addToCart(value)} >Add To Cart</button>
                </div>
                : <div className="addToCart">
                  <button className="addToCartBtn" >Added</button>
                </div>
              }
            </div>
          </div>
        </div>
      );
    });
  }
}
export default ListView;
