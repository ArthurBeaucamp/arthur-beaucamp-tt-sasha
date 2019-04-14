/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Code
 */
const Status = ({ data }) => {
  switch (data) {
    case 'actionRequired':
      return (<i className="far fa-edit" />);

    case 'cancel':
      return (<i className="fas fa-times" />);

    case 'confirm':
      return (<i className="fas fa-check" />);

    case 'information':
      return (<i className="far fa-eye" />);

    default:
      break;
  }
  return data;
};
Status.propTypes = {
  data: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Status;
