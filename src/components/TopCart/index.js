import React from 'react';
import { Card, Feed, Icon } from 'semantic-ui-react';
import './styles.scss';
import FeedCart from '../FeedCart';

const TopCart = ({ cart, open, shooped, handleToggle }) => (
  <Card className="top-cart" >
    <Card.Content>
      <Card.Header className="top-cart__header" onClick={handleToggle}>
        <span className="cart-counter">
          <Icon name="shopping cart" circular />
          5
        </span>
      </Card.Header>
    </Card.Content>
    <section className="top-cart__container">
      {
        open && (
          <Card.Content className="top-cart__content">
            <FeedCart />
            <FeedCart isTotal />
          </Card.Content>
        )
      }
    </section>
  </Card>
)

export default TopCart;