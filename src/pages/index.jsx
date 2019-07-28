import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Programs from '../components/Programs';
import FullWidthCta from '../shared/FullWidthCta';
import i18n from '../config/i18n';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  ${props => props.theme.flexColumn};
`;

export default () => (
  <Layout>
    <Wrapper>
      <Hero />
      <Programs />
      <FullWidthCta {...i18n.startTodayCta} />
    </Wrapper>
  </Layout>
);
