/**
 * Npm import
 */
import { expect } from 'chai';

/**
 * Local import
 */
import { formatDate, travelFormatDate } from '../../app/src/utils/date';

/**
 * Test
 */
describe('Utils: src/utils/date', () => {
  describe('formatDate', () => {
    it('Should be a function', () => {
      expect(formatDate).to.be.a('function');
    });

    it('Should be return a string', () => {
      expect(formatDate('2019-03-20')).to.be.a('string');
    });

    it('Should equal at', () => {
      expect(formatDate('2019-03-20')).to.be.equal('Mer. 20 Mars 2019');
    });
  });

  describe('travelFormatDate', () => {
    it('Should be a function', () => {
      expect(travelFormatDate).to.be.a('function');
    });

    it('Should be return a string', () => {
      expect(travelFormatDate('2019-03-20')).to.be.a('string');
    });

    it('Should equal at', () => {
      expect(travelFormatDate('2019-03-20')).to.be.equal('20/3/2019');
    });
  });
});
