import React from 'react';
import styled from 'styled-components';
import i18n from '../config/i18n';
import SectionHeader from './SectionHeader';
import Section from '../shared/Section';
import Icon from './Icon';
import { breakpoint } from '../lib/functions';

const { header, image, list } = i18n.programs;

const Text = styled.div`
  width: 60%;
  margin: 3rem;


  ${breakpoint.tabletPortrait`
    width: 100%;
    margin: 3rem;
  `};

  i.fas {
    font-size: 3rem;
    color: ${props => props.theme.primary};
  }
`;

const ImageWrapper = styled.div`
  width: 40%;
  margin-left: 2rem;
  margin: 3rem;

  ${props => props.theme.flexCenter};

  ${breakpoint.tabletPortrait`
    display: none;
  `};
`;

const Image = styled.img`
  margin-left: 2rem;
  width: 100%;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;

  ${breakpoint.tabletPortrait`
    grid-template-columns: auto;
    grid-column-gap: 0;
    grid-row-gap: 2rem;
  `};
`;

const Programs = () => (
  <Section id="programs">
    <Text>
      <SectionHeader>{header}</SectionHeader>
      <Items>
        {list.map(item => (
          <div>
            <Icon name={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.details}</p>
          </div>
        ))}
      </Items>
    </Text>
    <ImageWrapper>
      <Image src={image} alt="dumbbells" />
    </ImageWrapper>
  </Section>
);

export default Programs;
