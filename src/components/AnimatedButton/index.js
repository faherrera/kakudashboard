import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

const AnimatedButton = ({
  firstText,
  secondText,
  onClick,
  animated,
  firstIcon,
  color,
  size
}) => (
    <Button
      animated={animated}
      onClick={onClick}
      className="animated-button"
      color={color}
      size={size}
    >
      <Button.Content visible> {firstIcon && <Icon circular name={firstIcon} />} {firstText}</Button.Content>
      <Button.Content hidden >
        {secondText}
      </Button.Content>
    </Button>
  )

AnimatedButton.defaultProps = {
  firstText: 'Mostrando texto Visible',
  secondText: 'Mostrando texto Escondido',
  animated: 'fade',
  color: 'grey',
  size: 'medium'
}

AnimatedButton.propTypes = {
  firstText: PropTypes.string,
  secondText: PropTypes.string,
  onClick: PropTypes.func,
  animated: PropTypes.string,
  firstIcon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
}

export default AnimatedButton;