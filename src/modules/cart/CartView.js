import React, { Component } from 'react';  //eslint-disable-line
import ListView from '../../component/List/ListView';

class CartView extends Component {

  /**
   * Render Cart Page
   * @return {JSX} Rendered Cart Page
   */

  render() {
    return (
      <div className='productsGrid CartPageContainer'>
        {
          this.props.cartProducts.length > 0
            ? <ListView
              allProducts={this.props.allProducts.products}
              activeProducts={this.props.cartProducts}
              addToCart={this.props.addToCart}
              cartProducts={this.props.cartProducts}
              pageName={'cart'}
            />
            : <p className="errorMsg">There is no product in cart</p>
        }
      </div>
    );
  }
}
export default CartView;
