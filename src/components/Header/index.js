import React from 'react';
import './style.scss';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import TopCart from '../../containers/TopCart';

const PrincipalHeader = () => (
  <header>
    <Container>
      <nav className="principal-header">
        <Link to='/'>
          <h1 className="brand-logo"> Kaku Commerce</h1>
        </Link>
        <TopCart />
      </nav>

    </Container>
  </header>
);

export default PrincipalHeader;
