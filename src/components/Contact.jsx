/* eslint-disable no-alert */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Section from '../shared/Section';
import { PrimaryCta } from './Cta';
import { breakpoint, getWidth } from '../lib/functions';

const Container = styled(Section)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: 4rem;
  width: 100%;

  ${breakpoint.tabletPortrait`
    grid-template-columns: auto;
    grid-row-gap: 0;
  `};

  .gmap_canvas {
    overflow: hidden;
  }

  input, select, textarea {
    width: 70%;
    margin-bottom: 1.25rem;

    ${breakpoint.tabletPortrait`
      width: 100%;
    `};
  }

  label {
    color: ${props => props.theme.secondary};
  }
`;

const SendCta = styled(PrimaryCta)`
  display: block;
  border-radius: 0;
`;

const FormWrapper = styled.div`
  ${breakpoint.tabletPortrait`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `};
`;
const Form = styled.form`
  ${breakpoint.tabletPortrait`
    width: 100%
    display: flex;
    flex-direction: column;
    align-items: center;
  `};

  label {
    align-self: flex-start;
  }
`;


const MapWrapper = styled.div`
  ${breakpoint.tabletPortrait`
    margin: 2rem;
  `};
`;


const Contact = () => {
  const [fields, setFields] = useState({
    reason: 'info',
  });

  const map = useRef(null);

  useEffect(() => {
    const width = getWidth();
    if (width < 700) {
      map.current.width = width - 40;
    }
  });

  const [submitted, setSubmitted] = useState(false);

  const getFormBody = () => {
    const fieldsList = Object.keys(fields).map(key => ({
      name: key,
      value: fields[key]
    }));
    return {
      fields: fieldsList,
      skipValidation: true,
    };
  };

  const showError = (error) => {
    console.error(error);
    alert('Error sending message. Please give us a call.');
  };

  const showSuccess = () => {
    setSubmitted(true);
  };

  const handleSubmitForm = () => {
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${'4324853'}/${'fc1011f0-9fe8-4d72-967b-d96807653e94'}`;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(getFormBody()),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (response.status >= 400 && response.status < 600) {
          showError();
        } else {
          showSuccess();
        }
      })
      .catch(error => showError(error));
  };

  const handleTextChanged = ({ target }) => {
    setFields(
      {
        ...fields,
        [target.name]: target.value
      }
    );
  };

  const renderForm = () => (
    <FormWrapper>
      <h2>Contact US</h2>
      <Form name="contact" method="POST" data-netlify="true">
        <label htmlFor="firstname">First Name</label>
        <input type="text" placeholder="" name="firstname" id="firstname" onChange={handleTextChanged} />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" placeholder="" name="lastName" id="lastName" onChange={handleTextChanged} />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="" name="email" id="email" onChange={handleTextChanged} />
        <label htmlFor="message">Message</label>
        <textarea placeholder="" name="message" id="message" onChange={handleTextChanged} />
        <label htmlFor="topic">Reason</label>
        <select name="reason" id="topic" onChange={handleTextChanged}>
          <option value="info">Info</option>
          <option value="booking">Booking</option>
          <option value="other">Other</option>
        </select>
        <SendCta type="button" onClick={handleSubmitForm}>Send Message</SendCta>
      </Form>
    </FormWrapper>
  );

  return (
    <Container id="contact">
      {submitted
        ? 'Thanks for contacting us. We will be in touch shortly'
        : renderForm()
      }
      <MapWrapper>
        <div className="gmap_canvas">
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
        </div>
      </MapWrapper>
    </Container>
  );
};

export default Contact;
