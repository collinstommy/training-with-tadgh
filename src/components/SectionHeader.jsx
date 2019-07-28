import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  margin-bottom: 5rem;

  &:after {
    content: '';
    background-color: ${props => props.theme.primary};
    position: absolute;
    width: 30%;
    bottom: -2rem;
    left: 0;
    height: 4px;
  }
`;

const SectionHeader = ({ children }) => {
  return <Header>{children}</Header>;
};

export default SectionHeader;
