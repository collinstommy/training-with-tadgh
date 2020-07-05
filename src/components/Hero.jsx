import React from 'react';
import styled from 'styled-components';
import i18n from '../config/i18n';
import Navigation from './Navigation';
import { PrimaryCta } from './Cta';
import { breakpoint } from '../lib/functions';

const { subtitle, backgroundImage, ctaText } = i18n.hero;

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${backgroundImage});

  background-size: cover;
  width: 100%;
  color: ${props => props.theme.lightest};
  position: relative;
`;

const Title = styled.h1`
  font-size: 7.2rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  margin: 15px;

  ${breakpoint.tabletPortrait`
    font-size: 3rem;
  `};
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  line-height: 2.2rem;
  margin: 15px;
  font-weight: 400;
  font-family: Montserrat;
  text-transform: lowercase;

  ${breakpoint.tabletPortrait`
    font-size: 1.7rem;
  `};
`;

const StyledCta = styled(PrimaryCta)`
  margin: 3.5rem;
`;

const Highlight = styled.span`
  color: ${props => props.theme.primary};
`;

const Text = styled.div`
  margin: 200px 0;

  ${breakpoint.tabletPortrait`
     margin: 4rem 0;
  `};
`;

const Follow = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.75rem;
  p {
    color: ${props => props.theme.lightest};
  }
`;

const Icon = styled.img`
  height: 2rem;
  margin: 1rem;
`;

export default () => (
  <Container>
    <Navigation />
    <Text>
      <Title>
        <span>TC </span>
        <Highlight>Program </Highlight>
      </Title>
      <Subtitle>{subtitle}</Subtitle>
      <StyledCta type="secondary" to="/contact">{ctaText}</StyledCta>
    </Text>
    <Follow href="https://www.instagram.com/tc_program/">
      <Icon src="https://res.cloudinary.com/dmfebxjzk/image/upload/v1593968661/tadgh%20website/unnamed.png" alt="instagram icon" />
      <p>Follow us on Instagram</p>
    </Follow>
  </Container>
);
