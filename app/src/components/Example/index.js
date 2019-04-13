/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Code
 */
const Example = ({ message, doSomething }) => (
  <div id="example" onClick={doSomething}>{message}</div>
);
Example.propTypes = {
  message: PropTypes.string.isRequired,
  doSomething: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Example;
