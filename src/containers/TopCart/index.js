import React, { Component } from 'react';
import TopCartComponent from '../../components/TopCart';
import { connect } from 'react-redux';
import {
  toggleTopCartAction
} from './actionCreators'
class TopCart extends Component {
  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    const { toggleTopCartAction } = this.props;
    toggleTopCartAction();

  }

  render() {
    const { open, cart } = this.props;
    return (
      <TopCartComponent cart={cart} open={open} handleToggle={this.handleToggle} />
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
  open: state.cartReducer.openMenu,

});
export default connect(mapStateToProps, { toggleTopCartAction })(TopCart);