/**
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux';

/**
 * Local import
 */
import reducer from 'src/store/reducer';
import exampleMiddleware from './exampleMiddleware';

/**
 * Code
 */
// Enhancers
const exampleEnhancer = applyMiddleware(exampleMiddleware);
let enhancers = null;

// DevTools for Redux extension
if (process.env.NODE_ENV !== 'production') {
  enhancers = compose(
    exampleEnhancer,
    /* eslint-disable-next-line */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

enhancers = compose(exampleEnhancer);
const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
