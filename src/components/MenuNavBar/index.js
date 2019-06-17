import React from 'react';
import './styles.scss';
import { Container } from 'semantic-ui-react';

const MenuNavBar = () => (
  <section className="menu-navbar">
    <Container>
      <ul className="menu-navbar-list">
        <li>
          <a href="#!"> Categorias </a>
        </li>
        <li>
          <a href="#!"> Productos </a>
        </li>
        <li>
          <a href="#!"> Page 1 </a>
        </li>
        <li>
          <a href="#!"> Page 2 </a>
        </li>
      </ul>
    </Container>
  </section>
);

export default MenuNavBar;