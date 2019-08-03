/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';

export const hexToRgba = (hex, alpha) => {
  const hexToRgb = () => {
    const regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const newHex = hex.replace(regex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null;
  };

  const { r, g, b } = hexToRgb();
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const breakpoints = {
  hd: 1920,
  sd: 1366,
  tablet: 1024,
  tabletPortrait: 800,
  phone: 500,
};


export const breakpointAbove = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const breakpoint = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});


export const getWidth = () => {
  return Math.min(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
};
