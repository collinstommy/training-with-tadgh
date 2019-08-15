/* eslint-disable no-alert */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import { PrimaryCta } from './Cta';
import { breakpoint } from '../lib/functions';

const SendCta = styled(PrimaryCta)`
  display: inline-block;
  margin-top: 2rem;
  align-self: flex-start;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
    
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

const ContactForm = ({ className }) => {
  const [fields, setFields] = useState({
    reason: 'info',
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

  return submitted
    ? 'Thanks for contacting us. We will be in touch shortly'
    : (
      <Form className={className} name="contact" method="POST" data-netlify="true">
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
      </Form>);
};

export default ContactForm;
