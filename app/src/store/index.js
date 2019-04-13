/**
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux';

/**
 * Local import
 */
import reducer from 'src/store/reducer';
import afidiumMiddleware from './afidiumMiddleware';

/**
 * Code
 */
// Enhancers
const afidiumEnhancer = applyMiddleware(afidiumMiddleware);
let enhancers = null;

// DevTools for Redux extension
if (process.env.NODE_ENV !== 'production') {
  enhancers = compose(
    afidiumEnhancer,
    /* eslint-disable-next-line */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

enhancers = compose(afidiumEnhancer);
const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
