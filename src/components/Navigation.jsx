import styled from 'styled-components';
import React from 'react';

const Nav = styled.nav`
  margin-top: 1rem;
  ${props => props.theme.container};
`;

const Items = styled.ol`
  display: flex;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
`;

const NavItem = styled.li`
  margin: 1.5rem;
`;

const NavLink = styled.a`
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Header = () => (
  <Nav>
    <Items>
      <NavItem><NavLink>Programs</NavLink></NavItem>
      <NavItem><NavLink>About</NavLink></NavItem>
      <NavItem><NavLink>Pricing</NavLink></NavItem>
      <NavItem><NavLink>Contact</NavLink></NavItem>
    </Items>
  </Nav>
);

export default Header;
