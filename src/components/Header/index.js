import React from 'react';
import './style.scss';
import { Container, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PrincipalHeader = ({ handleOpen }) => (
  <header>
    <Container>
      <nav className="principal-header">
        <Button onClick={handleOpen}>
          <Icon name='sidebar' />
        </Button>
        <Link to='/'>
          <h1 className="brand-logo"> Kaku Commerce</h1>
        </Link>
      </nav>

    </Container>
  </header>
);

export default PrincipalHeader;
