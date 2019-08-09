import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ContactForm from '../components/Form';
import Navigation from '../components/Navigation';
import i18n from '../config/i18n';
import FullWidthCta from '../shared/FullWidthCta';
import { breakpoint } from '../lib/functions';

const StyledFullWidth = styled(FullWidthCta)`
  background-position: 20% 25%;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${props => props.backgroundImage});
`;

const StyledForm = styled(ContactForm)`
  margin: 5rem;
  width: 50%;
  align-items: stretch;

  ${breakpoint.tabletPortrait`
    width: 90%;
  `};
`;

const StyledNav = styled(Navigation)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const { imageUrl } = i18n.contact;

const Contact = () => {
  return (<Layout>
    <StyledNav />
    <StyledFullWidth backgroundImage={imageUrl} title="Contact Us" />
    <StyledForm />
  </Layout>
  );
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
