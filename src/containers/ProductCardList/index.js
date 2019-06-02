import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProductCard from '../../components/ProductCard';
import SimpleLoader from '../../components/SimpleLoader';
import { connect } from 'react-redux';
import * as actions from './action';
class ProductCardList extends Component {

  componentDidMount() {
    console.log('Props recibidas', this.props);
    const {
      getProductsAction
    } = this.props;

    getProductsAction();
  }

  render() {
    const { products, loading } = this.props;
    if (loading) {
      return <SimpleLoader />
    }
    return (
      <Grid columns={3} doubling>
        <Grid.Row>
          {
            products.length > 0 && products.map((item, i) => {
              return (
                <Grid.Column key={i}>
                  <ProductCard id={item.id} {...item} />
                </Grid.Column>
              )
            })
          }
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => (
  {
    products: state.productReducer.products,
    loading: state.productReducer.loading,
  }
);

export default connect(mapStateToProps, actions)(ProductCardList);
