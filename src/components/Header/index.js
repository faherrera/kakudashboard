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

        <ul className="principal-menu">
          <li>
            <a href="#!"> Dirección A </a>
          </li>
          <li>
            <a href="#!"> Dirección B </a>
          </li>
          <li>
            <a href="#!"> Dirección C </a>
          </li>
          <li>
            <a href="#!"> Dirección D </a>
          </li>
        </ul>
        <TopCart />
      </nav>

    </Container>
  </header>
);

export default PrincipalHeader;
