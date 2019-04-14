/**
 * Npm import
 */
import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Local import
 */
import App from '../../../app/src/components/App';
import Travel from '../../../app/src/components/Travel';
import { getTravelFiles } from '../../../app/src/store/afidiumMiddleware';

/**
 * Code
 */
configure({ adapter: new Adapter() });
const appComponent = (<App
  travelFiles={{
    booking: [
      { syscode: 'CODESYS01' },
      { syscode: 'CODESYS02' },
      { syscode: 'CODESYS03' },
    ],
  }}
  getTravelFiles={getTravelFiles}
/>);

/**
 * Tests
 */
describe('components/App <App />', () => {
  describe('Render', () => {
    it('travelList', () => {
      const wrapper = shallow(appComponent);
      expect(wrapper.find(Travel)).to.length(3);
    });
  });
});
