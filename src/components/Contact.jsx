/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../shared/Section';
import { PrimaryCta } from './Cta';

const Container = styled(Section)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: 4rem;
  width: 100%;

  .mapouter {
    height: 500px;
    width: 502px;
  }

  .gmap_canvas {
    overflow: hidden;
    height: 500px;
    width: 502px;
  }

  input, select, textarea {
    width: 70%;
    margin-bottom: 1.25rem;
  }

  label {
    color: ${props => props.theme.secondary};
  }
`;

const SendCta = styled(PrimaryCta)`
  display: block;
  border-radius: 0;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <div>
        <h2>Contact US</h2>
        <form name="contact" method="POST" data-netlify="true">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea placeholder="" name="message" id="message" />
          <label htmlFor="topic">Reason</label>
            <select id="topic">
              <option value="booking">Booking</option>
              <option value="info">Info</option>
              <option value="other">Other</option>
            </select>
          <SendCta>Send Message</SendCta>
        </form>
      </div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            height="500"
            width="502"
            title="map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=majestic%20business%20park&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>
    </Container>
  );
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
