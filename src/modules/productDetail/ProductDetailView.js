import React, { Component } from 'react';  //eslint-disable-line
import { getUrlParam } from '../../utils/commonDataFormat';

class ProductDetailView extends Component {

  /**
 * Convert Render Product Detail
 * @param  {obj} product  All Product Data
 * @param  {int} productID  Product ID(based on dispaly)
 * @return {JSX} Rendered Product Detail
 */

  renderProductDetail(product, productID) {
    return (
      <div className="container">
        <div className="productDeatilImage">
          <img src={require(`../../images/products/${product.image}`)} alt={product.name} />
        </div>
        <div className="mainProductDeatil">
          <h1 className="productDeatilName" title="productDeatilName" >{product.name}</h1>
          <div className="lineSpace" />
          <h2 className="productDeatilMeasurement">{product.measurement}</h2>
          <div className="lineSpace" />
          <h2 className="productDeatilPrice">{product.price}</h2>
          <div className="lineSpace" />
          <p className="productDeatilDesc"> {product.desc}</p>
          <div className="lineSpace" />
          <div key={this.props.cartCount}>
            {!this.props.cartProducts.includes(productID)
              ? <button className="productDeatilAddToCart" onClick={() => this.props.addToCart(productID)}>
                Add To Cart
              </button>
              : <button className="productDeatilAddToCart" >Added</button>
            }
          </div>
        </div>
      </div>
    );
  }

  /**
   * Render Product Detail Page
   * @return {JSX} Rendered Product Detail Page
   */

  render() {
    const productID = parseInt(getUrlParam(this.props.history.location.search)) || 0;
    return (
      <div className="productDetailContainer">
        {
          productID >= 0 && this.props.allProducts.products[productID]
            ? this.renderProductDetail(this.props.allProducts.products[productID], productID)
            : <p className="errorMsg"> There is something Wrong </p>
        }
      </div>
    );
  }
}

export default ProductDetailView;
