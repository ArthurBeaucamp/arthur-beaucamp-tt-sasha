/**
 * Initial State
 */
const initialState = {
  travelFiles: {},
};

/**
 * Types
 */
const TRAVEL_FILES = 'TRAVEL_FILES';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TRAVEL_FILES:
      return {
        ...state,
        travelFiles: action.data,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const travelFiles = data => ({
  type: TRAVEL_FILES,
  data,
});

/**
 * Export
 */
export default reducer;
