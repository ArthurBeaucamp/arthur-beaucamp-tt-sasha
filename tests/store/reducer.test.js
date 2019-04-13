/**
 * Npm import
 */
import { should } from 'chai';

import reducer, * as actions from '../../app/src/store/reducer';

/**
 * Code
 */
should();

/**
 * Tests
 */
describe('Reducer : src/store/reducer.js', () => {
  describe('Reducer', () => {
    it('Should be a function', () => {
      reducer.should.be.a('function');
    });

    it('Should return an object', () => {
      reducer().should.be.an('object');
    });
  });

  describe('Actions creators', () => {
    describe('travelFiles', () => {
      it('Should be a function', () => {
        actions.travelFiles.should.be.a('function');
      });

      it('Should return an object which have a property type which is : TRAVEL_FILES', () => {
        actions.travelFiles()
          .should.be.an('object')
          .which.have.a.property('type')
          .which.is.equal('TRAVEL_FILES');
      });

      it('Should a property data', () => {
        actions.travelFiles()
          .should.be.a.property('data');
      });
    });
  });
});
