import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const secondaryStyles = css`
  border: 1px solid ${props => props.theme.primary};
`;

const primaryStyles = css`
  background-color: ${props => props.theme.primary};
  border: none;
`;

const Content = styled.button`
  font-size: 1.5rem;
  padding: 1.5rem 2.5rem;
  border-radius: 3rem;
  background: none;
  color: ${props => props.theme.lightest};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;

  ${props => props.type === 'secondary' && secondaryStyles};
  ${props => props.type === 'primary' && primaryStyles};
`;

const Cta = ({ text, children, ...props }) => (
  <Content {...props}>{children}</Content>
);

export const PrimaryCta = props => <Cta {...props} type="primary" />;
export const SecondaryCta = props => <Cta {...props} type="secondary" />;
