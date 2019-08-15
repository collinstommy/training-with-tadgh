import styled from 'styled-components';
import { Link } from 'gatsby';
import React from 'react';
import { breakpoint } from '../lib/functions';

const Nav = styled.nav`
  letter-spacing: 2px;
  display: flex;
  width: calc(100% - 8rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
`;

const Items = styled.ol`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 400;
  font-family: Montserrat;
  margin: 0;

  display: grid;
  grid-template-columns: auto auto auto auto;
  ${breakpoint.tabletPortrait`
    grid-template-columns: auto auto;
  `};
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const Logo = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  margin-right: 2rem;
`;

const NavLink = styled(props => <Link {...props} />)`
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

const Header = ({ className }) => (
  <Nav className={className}>
    <Logo>
      <NavLink to="/">TC Fitness</NavLink>
    </Logo>
    <Items>
      <NavItem><NavLink to="/#programs">Programs</NavLink></NavItem>
      <NavItem><NavLink to="/#about">About</NavLink></NavItem>
      <NavItem><NavLink to="/#pricing">Pricing</NavLink></NavItem>
      <NavItem><NavLink to="/#contact">Contact</NavLink></NavItem>
    </Items>
  </Nav>
);

export default Header;
