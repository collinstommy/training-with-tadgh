import React from 'react';
import styled from 'styled-components';
import Section from '../shared/Section';
import i18n from '../config/i18n';
import { PrimaryCta } from './Cta';

const Container = styled(Section)`
  display: grid;
  grid-template-columns: 80% 20%;

  p {
    width: 70%;
  }
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.grey};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Col = styled.div`
  ${props => props.theme.flexCenter};
`;

const { heading, body, ctaText } = i18n.team;

const Team = () => (
  <Wrapper>
    <Container>
      <div>
        <h2>{heading}</h2>
        <p>{body}</p>
      </div>
      <Col>
        <PrimaryCta>
          {ctaText}
        </PrimaryCta>
      </Col>
    </Container>
  </Wrapper>
);

export default Team;
