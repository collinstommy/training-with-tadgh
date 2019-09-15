import React from 'react';
import styled from 'styled-components';
import Section from '../shared/Section';
import i18n from '../config/i18n';
import { breakpoint } from '../lib/functions';

const { image } = i18n.bio;
const Row = styled.div`
  ${breakpoint.tabletPortrait`
    width: 100%;
  `};
`;

const Container = styled(Section)`
  display: grid;
  grid-template-columns: 40% auto;
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  padding: 10rem;

  ${breakpoint.tabletPortrait`
    grid-template-columns: 80%;
  `};
   ${breakpoint.phone`
    padding: 7rem 0;
  `};
`;

const List = styled.ul`
  list-style: square;
  color: ${props => props.theme.secondary};
  margin-left: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
`;

const Bio = () => {
  return (
    <Container id="about">
      <ImageContainer>
        <Image src={image} alt="Tadgh Carroll" />
      </ImageContainer>
      <Row>
        <h2>Tadgh Carroll</h2>
        <p>
          A sports fanatic, born and bred in Mallow, Co. Cork. I'm passionate about sport, fitness, and nutrition. Above all else, I'm passionate about empowering others to improve. I believe that a coach should always be improving themselves. I read, study and develop new techniques to help those whom I coach. It is this dedication that has allowed me to provide positive outcomes again and again for my clients.
        </p>
        <p>
          Everyone has different goals, strengths, and weakness which is why I treat each client as an individual. I enjoy being part of this journey.
        </p>
        <h3>Qualifications</h3>
        <List>
          <li>Level 2 CrossFit coach</li>
          <li>Sport and Exercise Nutrition BSc (Hons)</li>
          <li>Joel Jameson-HRV training course</li>
          <li>Think Tank Fitness courses</li>
          <li>Year 1 Physical Therapy</li>
          <li>Qualified First Aider</li>
          <li>Chris Hinshaw- Aerobic Capacity Course</li>
        </List>
      </Row>
    </Container>
  );
};

export default Bio;
