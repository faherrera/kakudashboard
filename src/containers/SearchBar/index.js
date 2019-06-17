import React, { Component } from 'react';
import SearchBarComponent from './../../components/SearchBar';
import { connect } from 'react-redux';
import { searchBarAction } from './actionCreators';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.searchText,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const { value } = event.target;
    this.setState({ value });
    this.props.searchBarAction(value);
  }

  render() {
    return <SearchBarComponent onChange={this.handleOnChange} value={this.state.value} />
  }
}

const mapStateToProps = (state) => {
  return {
    searchText: state.searchBarReducer.searchText,
  }
}
export default connect(mapStateToProps, { searchBarAction })(SearchBar);