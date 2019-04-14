/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Status from './Status';
import Sector from './Sector';
import { formatDate, travelFormatDate } from '../../utils/date';
import { billingFormat } from '../../utils/billing';

/**
 * Code
 */
const Travel = ({ data }) => (
  <div className="travelContainer">
    {/* Travel xStatus */}
    <div className="travelContainer-statusInfo">
      <Status data={data.xStatus} />
    </div>

    {/* Travel general information */}
    <div className="travelContainer-generalInfo">
      <p className="travelContainer-generalInfo-code">{`${data.code} ${data.host}`}</p>

      <p className="travelContainer-generalInfo-date">
        {`Créé le ${formatDate(data.whenCreated)}`}
        {data.agent && ` par ${data.agent.firstName} ${data.agent.lastName}`}
      </p>
    </div>

    {/* Travel fligth customer and traveller information */}
    <div className="travelContainer-travelInfo">
      <p className="travelContainer-travelInfo-customer">
        {data.customer.firstName && `${data.customer.firstName} ${data.customer.lastName}`}
        {data.traveller && ` ${data.traveller.length} voyageur`}
        {data.traveller.length > 1 && 's'}
      </p>

      {data.sector && <Sector data={data.sector} />}

      {data.begin && (
        <p className="travelContainer-travelInfo-travelDate">
          {`du ${travelFormatDate(data.begin)} au ${travelFormatDate(data.end)}`}
        </p>
      )}
    </div>

    {/* Travel billing information */}
    {data.total && (
      <div className="travelContainer-billing">
        <p className="travelContainer-billing-total">
          {billingFormat(data.total[0].amount, data.total[0].currency)}
        </p>
      </div>
    )}
  </div>
);
Travel.propTypes = {
  data: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default Travel;
