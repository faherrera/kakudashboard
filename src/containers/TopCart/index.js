import React, { Component } from 'react';
import TopCartComponent from '../../components/TopCart';

class TopCart extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      open: false,
    }
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open } = this.state;
    return <TopCartComponent open={open} handleToggle={this.handleToggle} />
  }
}

export default TopCart;