import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 8rem;
  ${props => !props.fullWidth && props.theme.container};
  width: 100%;
`;

const Section = ({ children, className, fullWidth }) => {
  return <Container fullWidth={fullWidth} className={className}>{children}</Container>;
};

export default Section;
