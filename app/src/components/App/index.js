/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */


/**
 * Code
 */
export default class App extends React.Component {
  /**
   * PropTypes
   */
  static propTypes = {
    getTravelFiles: PropTypes.func.isRequired,
    travelFiles: PropTypes.object.isRequired,
  }

  /**
   * Actions
   */
  componentDidMount = () => {
    this.props.getTravelFiles();
  }

  /**
   * Render
   */
  render() {
    console.log(this.props.travelFiles);

    return (
      <div className="container">
        <h1 className="container-mainTitle">Sasha - Dossier de voyage</h1>
      </div>
    );
  }
}
