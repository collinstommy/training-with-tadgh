import React from 'react';
import styled from 'styled-components';
import i18n from '../config/i18n';
import Header from './Navigation';
import { SecondaryCta } from './Cta';

const { subtitle, backgroundImage, ctaText } = i18n.hero;

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-family: Open Sans;
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
  margin: 30px;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  line-height: 2.2rem;
  margin: 15px;
  font-weight: 700;
`;

const StyledCta = styled(SecondaryCta)`
  margin: 2rem;
`;

const Highlight = styled.span`
  color: ${props => props.theme.primary};
`;

const Text = styled.div`
  margin: 200px 0;
`;

export default () => (
  <Container>
    <Header />
    <Text>
      <Title>
        <span>TC </span>
        <Highlight>Fitness </Highlight>
      </Title>
      <Subtitle>{subtitle}</Subtitle>
      <StyledCta type="secondary">{ctaText}</StyledCta>
    </Text>
  </Container>
);
