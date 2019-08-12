import React from 'react';
import styled from 'styled-components';
import Section from '../shared/Section';
import i18n from '../config/i18n';
import { TertiaryCta } from './Cta';
import { breakpoint } from '../lib/functions';

const Container = styled(Section)`
  padding: 2rem 8rem 8rem;
  margin: 2rem;
  width: 95%;

  display: grid;
  grid-template-columns: 25fr 25fr 25fr 25fr;
  grid-column-gap: 1rem;

  ${breakpoint.tabletPortrait`
    flex-wrap: wrap;
    grid-template-columns: 50fr 50fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    
  `};

  ${breakpoint.phone`
    flex-wrap: wrap;
    grid-template-columns: 100fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    width: 100%;
    margin: 3rem;
    padding: 0;
  `};
`;

const Package = styled.div`
  ${props => props.theme.flexColumn};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.lightest};
  padding: 6rem 0;

  ${breakpoint.tabletPortrait`
    padding: 2rem 0;
    text-align: center;
    margin: 2rem 3rem;
  `};
`;

const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 3rem;
  letter-spacing: 4px;
  font-weight: 600;
  font-size: 1.8rem;
`;

const Price = styled.span`
  color: ${props => props.theme.primary};
  font-size: 5rem;
  font-weight: 600;

  ${breakpoint.tabletPortrait`
    font-size: 3rem;
  `};
`;

const Time = styled.span`
  color: ${props => props.theme.secondary};
  font-size: 1.8rem;


  ${breakpoint.tabletPortrait`
    font-size: 1.4rem;
  `};
`;

const Detail = styled.li`
  margin: 1.5rem;
  padding: 0;
`;

const List = styled.ul`
  padding: 0;
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.darkest};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const { packages } = i18n.pricing;

const Heading = styled.h2`
  color: ${props => props.theme.lightest};
  position: relative;
  margin-top: 7rem;
  margin-bottom: 5rem;

  &:after {
    content: '';
    background-color: ${props => props.theme.primary};
    transform: translateX(-50%);  
    position: absolute;
    width: 50%;
    bottom: -2rem;
    left: 50%;
    height: 4px;
  }
`;

const Pricing = () => (
  <Wrapper id="pricing">
    <Heading>Pricing</Heading>
    <Container>
      {packages.map(({ title, price, details, time }) => (
        <Package>
          <Title>{title}</Title>
          <div>
            <Price>€{price}</Price><Time>/{time}</Time>
          </div>
          <List>{details.map(item => <Detail>{item}</Detail>)}
          </List>
          <TertiaryCta to="/contact">Book</TertiaryCta>
        </Package>
      ))}
    </Container>
  </Wrapper>
);


export default Pricing;
