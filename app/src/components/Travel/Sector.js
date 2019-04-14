/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import { stopover } from 'src/utils/sector';

/**
 * Code
 */
export default class Sector extends React.Component {
  /**
   * PropTypes
   */
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  /**
   * State
   */
  state = {
    sectorStopover: {},
  };

  /**
   * Actions
   */
  componentDidMount = () => {
    this.setState({
      sectorStopover: stopover(this.props.data),
    });
  }

  /**
   * Render
   */
  render() {
    const { sectorStopover } = this.state;
    return (
      <div>
        {Object.keys(sectorStopover).length !== 0 && (
          <div className="stopover-container">
            {sectorStopover.stopover.map((code, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <p className="stopover-container-code" key={index}>{code}</p>
            ))}
          </div>
        )}

        {Object.keys(sectorStopover).length !== 0 &&
        sectorStopover.stopoverForOtherReturn.length !== 0 && (
          <div className="stopover-container">
            {sectorStopover.stopoverForOtherReturn.map((code, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <p className="stopover-container-code" key={index}>{code}</p>
            ))}
          </div>
        )}
      </div>
    );
  }
}
