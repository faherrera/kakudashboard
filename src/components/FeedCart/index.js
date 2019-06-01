import React from 'react';
import { Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

const FeedCart = ({ isTotal, image, name, quantity, price }) => (
  <Feed className='feed-cart'>
    <Feed.Event>
      {
        !isTotal && <Feed.Label image={image} />
      }
      <Feed.Content>
        {
          !isTotal && <Feed.Date content={`Cantidades: ${quantity}`} />
        }
        {
          !isTotal ? (
            <Feed.Summary>
              {name} - ${price}
            </Feed.Summary>
          )
            : (
              <Feed.Summary className="center">
                $ 500.2
              </Feed.Summary>
            )
        }
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

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