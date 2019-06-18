import React from 'react';
import { Sidebar } from 'semantic-ui-react';
import VerticalSidebar from '../../components/VerticalSidebar';

const SidebarWrapper = ({ visible, children }) => (
  <Sidebar.Pushable >
    <VerticalSidebar animation='overlay' direction='left' visible={visible} />
    <Sidebar.Pusher>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default SidebarWrapper;