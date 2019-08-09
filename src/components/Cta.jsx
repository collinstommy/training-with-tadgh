import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const secondaryStyles = css`
  border: 1px solid ${props => props.theme.primary};
`;

const primaryStyles = css`
  background-color: ${props => props.theme.primary};
  border: none;
`;

const tertiaryStyles = css`
  color: ${props => props.theme.darkest};
  border: 2px solid ${props => props.theme.primary};

  &:link {
    color: ${props => props.theme.darkest};
  }

  &:visited {
    color: ${props => props.theme.darkest};
  }
`;

const Content = styled(props => <Link {...props} />)`
  font-size: 1.5rem;
  padding: 1.5rem 2.5rem;
  border-radius: 3rem;
  background: none;
  color: ${props => props.theme.lightest};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;

  &:link {
    color: ${props => props.theme.lightest};
  }

  &:visited {
    color: ${props => props.theme.lightest};
  }

  ${props => props.ctaType === 'secondary' && secondaryStyles};
  ${props => props.ctaType === 'primary' && primaryStyles};
  ${props => props.ctaType === 'tertiary' && tertiaryStyles};
`;

const Cta = ({ text, children, ...props }) => (
  <Content {...props}>{children}</Content>
);

export const PrimaryCta = props => <Cta {...props} ctaType="primary" />;
export const SecondaryCta = props => <Cta {...props} ctaType="secondary" />;
export const TertiaryCta = props => <Cta {...props} ctaType="tertiary" />;
