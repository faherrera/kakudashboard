import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import location from '../../routes/location';
import { withRouter } from "react-router-dom";

const ProductCard = ({ id, imageUrl, name, price, history }) => (
  <Card className='item-card' onClick={() => history.push(`${location.PRODUCT}/${id}`)}>
    <Image src={imageUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header> {name} </Card.Header>
    </Card.Content>
    <Card.Content extra>
      <Icon name='dollar' />
      <span className='price'> Price: {price}</span>
    </Card.Content>
  </Card>
);

ProductCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,

}

export default withRouter(ProductCard);
