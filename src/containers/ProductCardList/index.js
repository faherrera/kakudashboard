import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProductCard from '../../components/ProductCard';
import FakerData from '../../utils/fakerData';
import ProductService from '../../services/product.services';
import SimpleLoader from '../../components/SimpleLoader';

class ProductCardList extends Component {
  constructor() {
    super();

    this.state = {
      list: FakerData.products,
      loading: true,
    };

    this.productService = new ProductService();
  }

  componentDidMount() {
    this.productService.getAll()
      .then(
        res => {
          this.setState({
            list: res.data,
            loading: false
          });
        }
      )
  }

  render() {
    const { list, loading } = this.state;

    if (loading) {
      return <SimpleLoader />
    }
    return (
      <Grid columns={3} doubling>
        <Grid.Row>
          {
            list.length > 0 && list.map((item, i) => {
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

export default ProductCardList;
