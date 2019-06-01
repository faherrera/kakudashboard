import React, { Component } from 'react';
import { Loader, Container } from 'semantic-ui-react';
import DetailCard from '../../components/DetailCard';
import FakerData from '../../utils/fakerData';

class DetailProduct extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
      loading: true,
    };

  }

  componentDidMount() {
    const { params } = this.props.match;
    const product = FakerData.products[0];

    this.setState({
      product,
      loading: false,
    });
  }

  render() {
    const { loading, product } = this.state;
    return (
      <Container>
        {
          loading && product != {}
            ? <span> Cargando .. </span>
            : <DetailCard {...product} />
        }
      </Container>
    );
  }
}

export default DetailProduct;
