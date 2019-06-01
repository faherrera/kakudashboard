import React from 'react';
import ProductCardList from '../../containers/ProductCardList';
import GeneralLayout from '../../layout/General';
import { Container } from 'semantic-ui-react';

const ProductListPage = () => {
  return (
    <GeneralLayout>
      <section className="product-list-page">
        <Container>
          <h1> Listado de nuestros productos </h1>
          <ProductCardList />
        </Container>
      </section>
    </GeneralLayout>
  )
}

export default ProductListPage;