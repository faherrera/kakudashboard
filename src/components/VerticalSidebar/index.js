import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Menu,
  Sidebar,
} from 'semantic-ui-react'

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    vertical
    visible={visible}
    width='wide'
  >
    <Menu.Item >
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item >
      <Icon name='gamepad' />
      Games
    </Menu.Item>
    <Menu.Item >
      <Icon name='camera' />
      Channels
    </Menu.Item>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

export default VerticalSidebar;