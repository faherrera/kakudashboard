import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './styles.scss';
import ButtonExampleAnimated from '../AnimatedButton';

const DetailCard = ({ id, imageUrl, name, price, text }) => (
  <Card
    centered
    fluid
    raised
    id={id}
    className="DetailCard"
  >
    <Image src={imageUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Whakanda Foreva</span>
      </Card.Meta>
      <Card.Description>
        {text}
      </Card.Description>
    </Card.Content>
    <Card.Content extra className='detail-card__extra'>
      <ButtonExampleAnimated
        secondText={`+1 al carrito`}
        firstText={`$${price || 25.55}`}
        firstIcon='heart'
        color='instagram'
        onClick={() => console.log('Fazendo click')}
        size='small'
      />
    </Card.Content>
  </Card>
)
export default DetailCard;