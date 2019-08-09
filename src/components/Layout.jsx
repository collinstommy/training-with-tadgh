import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../style/Global';
import theme from '../lib/theme';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      <Container>
        {children}
      </Container>
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
