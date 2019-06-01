import React from 'react';
import { Input, Container } from 'semantic-ui-react';

import './styles.scss';

const SearchBar = () => (
  <nav className="search-bar">
    <Container>
      <Input placeholder="Busca tu producto..." size="big" fluid />
    </Container>
  </nav>
);

export default SearchBar;
