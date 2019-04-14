/**
 * Npm import
 */
import { expect } from 'chai';

/**
 * Local import
 */
import { stopover } from '../../app/src/utils/sector';

/**
 * Code
 */
const sectorSameReturn = [
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
];

const sectorOtherReturn = [
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
];

/**
 * Test
 */
describe('Utils: src/utils/sector', () => {
  describe('stopover', () => {
    it('Should be a function', () => {
      expect(stopover).to.be.a('function');
    });

    it('Should be return a string', () => {
      expect(stopover(sectorSameReturn)).to.be.an('Object');
    });

    it('Should equal for the same return', () => {
      expect(stopover(sectorSameReturn)).to.be.deep.equal({
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

    it('Should equal for the other return', () => {
      expect(stopover(sectorOtherReturn)).to.be.deep.equal({
        stopover: [
          'CDG',
          'ORY',
          'MTA',
        ],
        stopoverForOtherReturn: [
          'ORY',
          'CDG',
        ],
      });
    });
  });
});
