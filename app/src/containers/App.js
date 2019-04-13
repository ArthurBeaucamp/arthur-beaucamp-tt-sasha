/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';
import { getTravelFiles } from 'src/store/afidiumMiddleware';

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
