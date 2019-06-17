import React from 'react';
import { Input, Container } from 'semantic-ui-react';

import './styles.scss';

const SearchBar = ({ onChange, value }) => (
  <nav className="search-bar">
    <Container>
      <Input placeholder="Busca tu producto..." size="big" fluid onChange={onChange} value={value} />
    </Container>
  </nav>
);

export default SearchBar;
