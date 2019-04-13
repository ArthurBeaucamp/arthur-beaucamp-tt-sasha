/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Example from 'src/components/Example';
import { doSomething } from 'src/store/reducer';

/**
 * Code
 */
const mapStateToProps = state => ({
  message: state.message,
});

const mapDispatchToProps = dispatch => ({
  doSomething: () => {
    dispatch(doSomething());
  },
});

/**
 * Export
 */
export default connect(mapStateToProps, mapDispatchToProps)(Example);
