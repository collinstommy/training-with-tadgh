import React from 'react';
import styled from 'styled-components';
import i18n from '../config/i18n';
import SectionHeader from './SectionHeader';
import Section from '../shared/Section';
import Icon from './Icon';
import { breakpoint } from '../lib/functions';

const { header, list } = i18n.programs;

const Text = styled.div`
  width: 100%;
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

const Items = styled.div`
  display: grid;
  grid-template-columns: 33fr 33fr 33fr;
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  margin-top: 4rem;

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
  </Section>
);

export default Programs;
