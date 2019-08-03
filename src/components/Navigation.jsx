import styled from 'styled-components';
import React from 'react';
import { breakpoint } from '../lib/functions';

const Nav = styled.nav`
  margin-top: 1rem;
  ${props => props.theme.container};
`;

const Items = styled.ol`
  display: flex;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;

  display: grid;
  grid-template-columns: auto auto auto auto;
  ${breakpoint.tabletPortrait`
    grid-template-columns: auto auto;
  `};
`;

const NavItem = styled.li`
  margin: 1.5rem;
`;

const NavLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.lightest};
  
  &:hover {
    color: ${props => props.theme.primary};
  }

  &:visited {
    color: ${props => props.theme.lightest};
  }
`;

const Header = () => (
  <Nav>
    <Items>
      <NavItem><NavLink href="#programs">Programs</NavLink></NavItem>
      <NavItem><NavLink href="#about">About</NavLink></NavItem>
      <NavItem><NavLink href="#pricing">Pricing</NavLink></NavItem>
      <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
    </Items>
  </Nav>
);

export default Header;
