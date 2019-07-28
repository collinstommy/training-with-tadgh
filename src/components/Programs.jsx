import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import i18n from '../config/i18n';
import SectionHeader from './SectionHeader';
import Section from '../shared/Section';
import Icon from './Icon';

const { header, image, list } = i18n.programs;

const Text = styled.div`
  width: 60%;

  i.fas {
    font-size: 3rem;
    color: ${props => props.theme.primary};
  }
`;

const ImageWrapper = styled.div`
  width: 40%;
  margin-left: 2rem;
  ${props => props.theme.flexCenter};
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
`;

const Programs = () => {
  return (
    <Section>
      <Text>
        <SectionHeader>{header}</SectionHeader>
        <Items>
          {list.map(item => {
            return (
              <div>
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </div>
            );
          })}
        </Items>
      </Text>
      <ImageWrapper>
        <Image src={image} alt="dumbbells" />
      </ImageWrapper>
    </Section>
  );
};

export default Programs;
