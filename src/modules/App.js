import React, { Component } from 'react';  //eslint-disable-line
import { Route } from 'react-router-dom';

import ProductListingViewContainer from './productListing/ProductListingViewContainer';
import HeaderViewContainer from './header/HeaderView';
import ProductDetailViewContainer from './productDetail/ProductDetailViewContainer';
import CartViewContainer from './cart/CartViewContainer';

class App extends Component {
  
  /**
   * App Class, will pass on all the data from here
   * all the views will be rendered as child of App
   */

  render() {
    return (
      <div className="App">
        <main>
          <HeaderViewContainer />
          <Route exact path="/" component={ProductListingViewContainer} />
          <Route exact path="/product" component={ProductDetailViewContainer} />
          <Route exact path="/cart" component={CartViewContainer} />
        </main>
      </div >
    );
  }
}

export default App;

