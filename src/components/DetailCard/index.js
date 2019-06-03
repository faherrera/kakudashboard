import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './styles.scss';
import ButtonExampleAnimated from '../AnimatedButton';

const DetailCard = ({ product, addToCart }) => (
  <Card
    centered
    fluid
    raised
    id={product.id}
    className="DetailCard"
  >
    <Image src={product.imageUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{product.name || "Name"}</Card.Header>
      <Card.Meta>
        <span className='date'>Whakanda Foreva</span>
      </Card.Meta>
      <Card.Description>
        {product.text}
      </Card.Description>
    </Card.Content>
    <Card.Content extra className='detail-card__extra'>
      <ButtonExampleAnimated
        secondText={`+1 al carrito`}
        firstText={`$${product.price}`}
        firstIcon='heart'
        color='instagram'
        onClick={() => addToCart(product)}
        size='small'
      />
    </Card.Content>
  </Card>
)
export default DetailCard;