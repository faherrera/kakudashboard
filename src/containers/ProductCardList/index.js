import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProductCard from '../../components/ProductCard';
import SimpleLoader from '../../components/SimpleLoader';
import { connect } from 'react-redux';
import * as actions from './action';
import ProductsGrid from '../../components/ProductsGrid';


class ProductCardList extends Component {

  componentDidMount() {
    const {
      getProductsAction
    } = this.props;

    getProductsAction();
  }

  render() {
    const { products, loading, searchText } = this.props;
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));

    if (loading) {
      return <SimpleLoader />
    }
    return (
      <ProductsGrid
        products={filteredProducts}
      />
    );
  }
}

const mapStateToProps = (state) => (
  {
    products: state.productReducer.products,
    loading: state.productReducer.loading,
    error: state.productReducer.error,
    searchText: state.searchBarReducer.searchText,
  }
);

export default connect(mapStateToProps, actions)(ProductCardList);
