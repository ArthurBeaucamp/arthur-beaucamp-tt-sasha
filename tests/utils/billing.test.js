/**
 * Npm import
 */
import { expect } from 'chai';

/**
 * Local import
 */
import { billingFormat } from '../../app/src/utils/billing';

/**
 * Test
 */
describe('Utils: src/utils/billing', () => {
  describe('billingFormat', () => {
    it('Should be a function', () => {
      expect(billingFormat).to.be.a('function');
    });

    it('Should be return a string', () => {
      expect(billingFormat(469.56, 'USD')).to.be.a('string');
    });

    it('Should equal at', () => {
      expect(billingFormat(469.56, 'USD')).to.be.equal('469,56 $');
    });
  });
});
