import React from 'react';
import { Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

const FeedCart = (props) => (
  <Feed className='feed-cart'>
    {
      props.isTotal ? <FeedTotal {...props} />
        : <FeedProductCart {...props} />
    }
  </Feed>
);

const FeedProductCart = ({ imageUrl, name, quantity, price }) => (
  <Feed.Event>
    <Feed.Label image={imageUrl} />
    <Feed.Content>
      <Feed.Date content={`Cantidades: ${quantity}`} />
      <Feed.Summary>
        {name} / ${price}
      </Feed.Summary>
    </Feed.Content>
  </Feed.Event>
);

const FeedTotal = ({ cart }) => (
  <Feed.Event>
    <Feed.Content>
      <Feed.Summary className="feed-total">
        {
          cart.length > 0
            ?
            <strong>
              ${cart.reduce((sum, product) => sum + (product.price * product.quantity), 0)}
            </strong>
            : <strong> ¡Aún no tienes elementos en el carrito! </strong>
        }

      </Feed.Summary>
    </Feed.Content>
  </Feed.Event>
)

FeedCart.defaultProps = {
  isTotal: false,
  image: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
  name: 'Producto ABC',
  quantity: 1,
  price: 35.8,
}

FeedCart.propTypes = {
  isTotal: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
}

export default FeedCart;