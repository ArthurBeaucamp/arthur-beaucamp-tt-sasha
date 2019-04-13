/**
 * Npm import
 */
import { should } from 'chai';

import store, * as actions from '../../app/src/store/afidiumMiddleware';

/**
 * Code
 */
should();

/**
 * Tests
 */
describe('Middleware : src/store/afidiumMiddleware.js', () => {
  describe('Store', () => {
    it('Should be a function', () => {
      store.should.be.a('function');
    });
  });

  describe('Actions creators', () => {
    describe('getTravelFiles', () => {
      it('Should be a function', () => {
        actions.getTravelFiles.should.be.a('function');
      });

      it('Should return an object which have a property type which is : GET_TRAVEL_FILES', () => {
        actions.getTravelFiles()
          .should.be.an('object')
          .which.have.a.property('type')
          .which.is.equal('GET_TRAVEL_FILES');
      });
    });
  });
});
