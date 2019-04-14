/**
 * Stopover return
 *
 * @param   {[array]} sector
 * @return  {[Object]}      Object of array
 */
// eslint-disable-next-line import/prefer-default-export
export const stopover = (sector) => {
  const result = [];
  const resultForOtherReturn = [];

  sector.map((stop) => {
    if (resultForOtherReturn.length > 0) {
      resultForOtherReturn.push(stop.to.airport.code);
    }
    else {
      // eslint-disable-next-line no-lonely-if
      if (result.length === 0) {
        result.push(stop.from.airport.code, stop.to.airport.code);
      }
      else {
        // eslint-disable-next-line no-lonely-if
        if (resultForOtherReturn.length === 0 &&
          stop.from.airport.code === result[result.length - 1]) {
          result.push(stop.to.airport.code);
        }
        else {
          resultForOtherReturn.push(stop.from.airport.code, stop.to.airport.code);
        }
      }
    }
    return result;
  });

  return {
    stopover: result,
    stopoverForOtherReturn: resultForOtherReturn,
  };
};
