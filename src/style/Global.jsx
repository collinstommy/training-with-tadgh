import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  } 

  body {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body, p {
    font-family: Roboto, sans-serif;
    font-size: 1.5rem;
    line-height: 2.6rem
  }

  p {
    color: #666;
  }

  h1, h2, h3, h4, h5, h5 {
    text-transform: uppercase;
  }

  h1 {
    font-size: 4rem;
    line-height: 4.4rem;
  }

  h2 {
    font-size: 2.8rem;
    line-height: 3.1rem;
  }

  h3 {
    font-size: 2rem;
    line-height: 2.6rem;
  }

  h4 {
    font-size: 1.6rem;;
    line-height: 1.8rem;
  }

  h5 {
    font-size: 1.4rem;
    line-height: 1.6rem;
  }

  h6 {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  a:link, a:visited {
    color: #fb5b21
  }

  a:hover, a:focus, a:active {
    color: #b0360a
  }
`;
