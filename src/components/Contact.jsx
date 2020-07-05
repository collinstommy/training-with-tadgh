/* eslint-disable no-alert */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import Section from '../shared/Section';
import { breakpoint } from '../lib/functions';
import Form from './Form';

const Container = styled(Section)`
  width: 100%;
  color: ${props => props.theme.flexColumn};


  input, select, textarea {
    width: 90%;
    margin-bottom: 1.25rem;

    ${breakpoint.tabletPortrait`
      width: 100%;
    `};
  }

  label {
    color: ${props => props.theme.secondary};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
  grid-row-gap: 4rem;
  grid-column-gap: 3rem;
  width: 100%;

  ${breakpoint.tabletPortrait`
    grid-template-columns: auto;
    grid-row-gap: 0;
  `};
`;

const Heading = styled.h2`
  ${breakpoint.tabletPortrait`
    text-align: center;
  `};
`;

const FormWrapper = styled.div`
  ${breakpoint.tabletPortrait`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `};
`;

const Contact = () => (
  <Container id="contact">
    <Heading>Contact US</Heading>
    <Grid>
      <FormWrapper><Form /></FormWrapper>
    </Grid>
  </Container>
);

export default Contact;
