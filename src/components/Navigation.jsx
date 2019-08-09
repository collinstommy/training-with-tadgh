import styled from 'styled-components';
import { Link } from 'gatsby';
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

const NavLink = styled(props => <Link {...props} />)`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.lightest};
  
  &:hover {
    color: ${props => props.theme.primary};
  }

  &:visited {
    color: ${props => props.theme.primary};
  }
`;

const Header = ({ className }) => (
  <Nav className={className}>
    <Items>
      <NavItem><NavLink to="/#program">Programs</NavLink></NavItem>
      <NavItem><NavLink to="/#about">About</NavLink></NavItem>
      <NavItem><NavLink to="/#pricing">Pricing</NavLink></NavItem>
      <NavItem><NavLink to="/#contact">Contact</NavLink></NavItem>
    </Items>
  </Nav>
);

export default Header;
