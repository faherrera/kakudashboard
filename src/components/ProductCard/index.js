import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import location from '../../routes/location';

const ProductCard = ({ id, imageCode, name, price }) => (
  <Link to={`${location.PRODUCT}/${id}`} className='item-card'>
    <Card >
      <Image src={imageCode} wrapped ui={false} />
      <Card.Content>
        <Card.Header> {name} </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Icon name='dollar' />
        <span className='price'> Price: {price}</span>
      </Card.Content>
    </Card>

  </Link>
);

ProductCard.propTypes = {
  imageCode: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,

}

export default ProductCard;
