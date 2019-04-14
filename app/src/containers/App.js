/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import App from '../components/App';
import { getTravelFiles } from '../store/afidiumMiddleware';

/**
 * Code
 */
const mapStateToProps = state => ({
  travelFiles: state.travelFiles,
});

const mapDispatchToProps = { getTravelFiles };

/**
 * Export
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
