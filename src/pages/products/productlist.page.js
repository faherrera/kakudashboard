import React from 'react';
import ProductCardList from '../../containers/ProductCardList';
import GeneralLayout from '../../layout/General';
import { Container } from 'semantic-ui-react';
import TitlePage from '../../components/TitlePage';

const ProductListPage = () => {
  return (
    <GeneralLayout>
      <section className="product-list-page">
        <Container>
          <TitlePage title="Todos nuestros productos" />
          <ProductCardList />
        </Container>
      </section>
    </GeneralLayout>
  )
}

export default ProductListPage;