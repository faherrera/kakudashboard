import React, { Component } from 'react';
import { Loader, Container } from 'semantic-ui-react';
import DetailCard from '../../components/DetailCard';
import FakerData from '../../utils/fakerData';
import ProductService from '../../services/product.services';
import SimpleLoader from '../../components/SimpleLoader';

class DetailProduct extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
      loading: true,
    };

    this.productService = new ProductService();
  }

  componentDidMount() {
    const { params } = this.props.match;
    this.productService.getProductById(params.id)
      .then(
        res => {
          this.setState({
            product: res.data,
            loading: false,
          });
        }
      )

  }

  render() {
    const { loading, product } = this.state;

    if (loading) {
      return <SimpleLoader />
    }

    return (
      <Container>
        {
          product != {} && <DetailCard {...product} />
        }
      </Container>
    );
  }
}

export default DetailProduct;
