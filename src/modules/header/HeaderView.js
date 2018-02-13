import React, { Component } from 'react';  //eslint-disable-line
import { history } from '../../redux/store';

class HeaderView extends Component {

  /**
   * Render Header
   * @return {JSX} Rendered Header
   */

  render() {
    return (
      <div className='header'>
        <ul className = 'topRightMenu'>
          <li onClick={() => history.push('/')}> Browser</li>
          <li onClick={() => history.push('/cart')}> Cart </li>
        </ul>
      </div>
    );
  }
}
export default HeaderView;
