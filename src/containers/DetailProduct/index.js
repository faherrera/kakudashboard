import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import DetailCard from '../../components/DetailCard';
import SimpleLoader from '../../components/SimpleLoader';
import { connect } from 'react-redux';
import { getProductById } from './actionCreators';
import { addProductToCart } from '../TopCart/actionCreators';
class DetailProduct extends Component {

  componentDidMount() {
    const { getProductById } = this.props;
    const { params } = this.props.match;
    getProductById(params.id)
  }

  handleAddToCart(product) {
    const { addProductToCart } = this.props;
    console.log('Enviando!!');
    addProductToCart(product);
  }
  render() {
    const { loading, product } = this.props;

    if (loading) {
      return <SimpleLoader />
    }

    return (
      <Container>
        <Grid centered columns={2}>
          <Grid.Column>
            {
              product && <DetailCard product={product} addToCart={this.handleAddToCart.bind(this)} />
            }
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => (
  {
    product: state.detailReducer.product,
    loading: state.detailReducer.loading,
  }
)
export default connect(mapStateToProps, { getProductById, addProductToCart })(DetailProduct);
