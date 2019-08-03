import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoint } from '../lib/functions';

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 8rem;
  ${props => !props.fullWidth && props.theme.container};
  width: 100%;
  
  ${breakpoint.tabletPortrait`
    padding: 2rem 1rem;
  `};
`;

const Section = ({
  children, className, fullWidth, ...props
}) => <Container {...props} fullWidth={fullWidth} className={className}>{children}</Container>;

export default Section;
