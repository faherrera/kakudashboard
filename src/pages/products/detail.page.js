import React from 'react';
import GeneralLayout from '../../layout/General';
import { Container } from 'semantic-ui-react';
import DetailProduct from '../../containers/DetailProduct';

const DetailProductPage = (props) => {
  return (
    <GeneralLayout>
      <section className="detail-list-page" style={{ marginTop: "2rem" }}>
        <Container>
          <DetailProduct {...props} />
        </Container>
      </section>
    </GeneralLayout>
  )
}

export default DetailProductPage;