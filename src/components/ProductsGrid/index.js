import React from 'react';
import { Grid } from 'semantic-ui-react';
import ProductCard from '../ProductCard';

const ProductsGrid = ({
  products,
  quantityColumn,
  limitProducts
}) => (
    <Grid columns={quantityColumn || 4} doubling>
      <Grid.Row>
        {
          products.slice(0, limitProducts || products.length).map(
            (product, index) => (
              <Grid.Column key={index}>
                <ProductCard
                  {...product}
                />
              </Grid.Column>
            )
          )
        }
      </Grid.Row>
    </Grid>
  );

export default ProductsGrid;