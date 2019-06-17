/* eslint "jsx-quotes": ["error", "prefer-double"] */
import React from 'react';
import HeaderNav from '../../components/Header';
import SearchBar from '../../containers/SearchBar';

const GeneralLayout = ({ children }) => (
  <div className="general-wrapper">
    <HeaderNav />
    <SearchBar />
    <main>
      {children}
    </main>
  </div>
);

export default GeneralLayout;
