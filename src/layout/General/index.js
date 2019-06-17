/* eslint "jsx-quotes": ["error", "prefer-double"] */
import React from 'react';
import HeaderNav from '../../components/Header';
import SearchBar from '../../containers/SearchBar';
import MenuNavBar from '../../components/MenuNavBar';

const GeneralLayout = ({ children }) => (
  <div className="general-wrapper">
    <HeaderNav />
    <MenuNavBar />
    <main>
      {children}
    </main>
  </div>
);

export default GeneralLayout;
