/**
 * Npm import
 */
import axios from 'axios';

/**
 * Local import
 */
import { travelFiles } from './reducer';

/**
 * Type
 */
const GET_TRAVEL_FILES = 'GET_TRAVEL_FILES';

/**
 * Code
 */
export default store => next => (action) => {
  switch (action.type) {
    case GET_TRAVEL_FILES: {
      axios
        .get('https://cors-anywhere.herokuapp.com/https://www.ghusse.com/afidium/response.json')
        .then((res) => {
          if (!res.data.error) {
            store.dispatch(travelFiles(res.data.data));
          }
          else {
            console.error(res.data.error);
          }
        });
      break;
    }

    default:
  }

  next(action);
};

/**
 * Action creators
 */
export const getTravelFiles = () => ({
  type: GET_TRAVEL_FILES,
});
