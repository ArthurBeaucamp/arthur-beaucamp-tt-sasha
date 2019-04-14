/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Travel from '../Travel';

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
    const { travelFiles } = this.props;

    return (
      <div className="mainContainer">
        <h1 className="mainContainer-mainTitle">Sasha - Dossier de voyage</h1>
        <div className="mainContainer-travelFilesList">
          {/* Travel List */}
          {travelFiles.booking && travelFiles.booking.map(travel => (
            <Travel key={travel.syscode} data={travel} />
          ))}
        </div>
      </div>
    );
  }
}
