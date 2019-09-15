/* eslint-disable no-alert */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Section from '../shared/Section';
import { breakpoint, getWidth } from '../lib/functions';
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

const MapWrapper = styled.div`
  overflow:hidden;
  padding-bottom:56.25%;
  position:relative;
  height:0;
  
  iframe{
      left:0;
      top:0;
      height:100%;
      width:100%;
      position:absolute;
  }
  ${breakpoint.tabletPortrait`
    margin: 2rem;
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

const Contact = () => {
  const map = useRef(null);

  return (
    <Container id="contact">
      <Heading>Contact US</Heading>
      <Grid>
        <FormWrapper><Form /></FormWrapper>
        <MapWrapper>
          <iframe
            ref={map}
            height="500"
            width="502"
            title="map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=majestic%20business%20park&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
          />
        </MapWrapper>
      </Grid>
    </Container>
  );
};

export default Contact;
