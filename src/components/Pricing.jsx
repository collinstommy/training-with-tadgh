import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../shared/Section';
import i18n from '../config/i18n';
import { TertiaryCta } from './Cta';

const Package = styled.div`
  width: 30%;
  ${props => props.theme.flexColumn};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.lightest};
  padding: 6rem 0;


  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 3rem;
  letter-spacing: 4px;
  font-weight: 600;
  font-size: 1.8rem;
`;

const Container = styled(Section)`
`;

const Price = styled.span`
  color: ${props => props.theme.primary};
  font-size: 5rem;
  font-weight: 600;
`;

const Time = styled.span`
  color: ${props => props.theme.secondary};
  font-size: 1.8rem;
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
  justify-content: center;
`;

const { packages } = i18n.pricing;

const Pricing = () => {
  return (
    <Wrapper>
      <Container>
        {packages.map(({ title, price, details }) => (
          <Package>
            <Title>{title}</Title>
            <div>
              <Price>€{price}</Price><Time>/month</Time>
            </div>
            <List>{details.map(item => <Detail>{item}</Detail>)}
            </List>
            <TertiaryCta>Book</TertiaryCta>
          </Package>
        ))}
      </Container>
    </Wrapper>
  );
};


export default Pricing;
