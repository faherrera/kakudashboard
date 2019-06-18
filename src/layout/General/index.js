import React, { useState } from 'react';
import HeaderNav from '../../components/Header';
import Wrapper from '../../containers/SidebarWrapper';

const GeneralLayout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const handleOpenSidebar = () => setVisible(!visible);

  return (
    <Wrapper visible={visible}>
      <section className="general-wrapper">
        <HeaderNav handleOpen={handleOpenSidebar} />
        <main>
          {children}
        </main>
      </section>
    </Wrapper>
  )
}

export default GeneralLayout;