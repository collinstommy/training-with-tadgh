import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = ({ name }) => {
  return <i class={`fas fa-${name}`}></i>;
};

export default Icon;
