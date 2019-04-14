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
import Sector from '../../../app/src/components/Travel/Sector';

/**
 * Code
 */
configure({ adapter: new Adapter() });
const sectorComponentSameReturn = (<Sector
  data={[
    {
      end: '2019-05-23',
      from: {
        airport: {
          code: 'CDG',
        },
      },
      to: {
        airport: {
          code: 'ORY',
        },
      },
      begin: '2019-05-23',
    },
    {
      end: '2019-05-23',
      from: {
        airport: {
          code: 'ORY',
        },
      },
      to: {
        airport: {
          code: 'MTA',
        },
      },
      begin: '2019-05-23',
    },
    {
      end: '2019-05-23',
      from: {
        airport: {
          code: 'MTA',
        },
      },
      to: {
        airport: {
          code: 'ORY',
        },
      },
      begin: '2019-05-23',
    },
    {
      end: '2019-05-23',
      from: {
        airport: {
          code: 'ORY',
        },
      },
      to: {
        airport: {
          code: 'CDG',
        },
      },
      begin: '2019-05-23',
    },
  ]}
/>);

const sectorComponentOtherReturn = (<Sector
  data={[
    {
      end: '2019-05-23',
      from: {
        airport: {
          code: 'CDG',
        },
      },
      to: {
        airport: {
          code: 'ORY',
        },
      },
      begin: '2019-05-23',
    },
    {
      end: '2019-05-23',
      from: {
        airport: {
          code: 'ORY',
        },
      },
      to: {
        airport: {
          code: 'MTA',
        },
      },
      begin: '2019-05-23',
    },
    {
      end: '2019-05-23',
      from: {
        airport: {
          code: 'ORY',
        },
      },
      to: {
        airport: {
          code: 'CDG',
        },
      },
      begin: '2019-05-23',
    },
  ]}
/>);

/**
 * Tests
 */
describe('components/Travel/Sector <Sector />', () => {
  describe('State', () => {
    it('sectorStopover', () => {
      const wrapper = shallow(sectorComponentSameReturn);
      expect(wrapper.state().sectorStopover).to.deep.equal({
        stopover: [
          'CDG',
          'ORY',
          'MTA',
          'ORY',
          'CDG',
        ],
        stopoverForOtherReturn: [],
      });
    });
  });

  describe('Render', () => {
    it('Stopover with same return', () => {
      const wrapper = shallow(sectorComponentSameReturn);

      expect(wrapper.find('.stopover-container')).to.length(1);
      expect(wrapper.find('.stopover-container-code')).to.length(5);
    });

    it('Stopover with other return', () => {
      const wrapper = shallow(sectorComponentOtherReturn);

      expect(wrapper.find('.stopover-container')).to.length(2);
      expect(wrapper.find('.stopover-container-code')).to.length(5);
    });
  });
});
