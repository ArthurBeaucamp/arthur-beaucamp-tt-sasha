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
import Travel from '../../../app/src/components/Travel';
import Sector from '../../../app/src/components/Travel/Sector';

/**
 * Code
 */
configure({ adapter: new Adapter() });
const travelComponent = (<Travel
  data={{
    xStatus: 'confirm',
    code: 'CODE01',
    host: 'GALILEO',
    whenCreated: '2019-03-20',
    agent: {
      firstName: 'Services',
      lastName: 'Web',
    },
    customer: {
      firstName: 'GEORGE',
      lastName: 'CLOONEY',
    },
    traveller: [
      {},
      {},
    ],
    sector: [],
    begin: '2019-05-12',
    end: '2019-06-24',
    total: [
      {
        amount: 1203.15,
        currency: 'EUR',
      },
    ],
  }}
/>);

/**
 * Tests
 */
describe('components/Travel <Travel />', () => {
  describe('Render', () => {
    it('confirm Status', () => {
      const wrapper = shallow(travelComponent);

      expect(wrapper.find(Sector)).to.length(1);
      expect(wrapper.find('.travelContainer-travelInfo-travelDate')).to.length(1);
      expect(wrapper.find('.travelContainer-billing')).to.length(1);
    });
  });
});
