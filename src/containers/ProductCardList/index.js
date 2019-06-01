import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProductCard from '../../components/ProductCard';
import FakerData from '../../utils/fakerData';

class ProductCardList extends Component {
  constructor() {
    super();

    this.state = {
      list: FakerData.products,
    };
  }

  render() {
    return (
      <Grid columns={3} doubling>
        <Grid.Row>
          {
            this.state.list.length > 0 && this.state.list.map((item, i) => {
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
