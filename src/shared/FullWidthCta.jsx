import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { PrimaryCta } from '../components/Cta';
import { breakpoint } from '../lib/functions';

const Container = styled(Section)`
  ${props => props.theme.flexColumn};
  align-items: center;
  width: 100%;
  padding: 10rem;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${props => props.backgroundImage});
  background-size: cover;
  color: ${props => props.theme.lightest};

  ${breakpoint.tabletPortrait`
    text-align: center;
  `};
  ${breakpoint.phone`
    padding: 6rem 0;
  `};
`;

const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 600;
  line-height: 1.2;
  margin: 0rem;

  ${breakpoint.phone`
    font-size: 2rem;
  `};
`;

const Subtitle = styled.p`
  color: ${props => props.theme.lightest};
  font-size: 1.8rem;
  line-height: 1.2;

  ${breakpoint.phone`
    font-size: 1.5rem;
  `};
`;

const Text = styled.div`
  ${props => props.theme.flexColumn};
  ${props => props.theme.flexCenter};
  margin-bottom: 4rem;

  ${breakpoint.tabletPortrait`
    margin: 2rem;
  `};
`;

const FullWidthCta = ({
  title, subtitle, ctaText, backgroundImage, className,
}) => (
  <Container
    className={className}
    backgroundImage={backgroundImage}
    fullWidth
  >
    <Text>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Text>
    {ctaText && <PrimaryCta to="/contact">{ctaText}</PrimaryCta>}
  </Container>
);

FullWidthCta.propTypes = {};

export default FullWidthCta;
