import { expect } from 'chai';
import sinon from 'sinon';
import useExtend from '../../src/hooks/useExtend';

describe('useExtend', () => {
    let testMap;
    let extend, beforeHook, afterHook;
  
    beforeEach(() => {
      testMap = new Map();
      ({ extend, beforeHook, afterHook } = useExtend(testMap));
    });
  
    it('should allow adding a new type with extend', () => {
      const testType = 'testType';
      const testFn = sinon.fake.returns(['testValue']);
      extend(testType, testFn);
  
      expect(testMap.has(testType)).to.be.true;
      expect(testMap.get(testType)()).to.deep.equal(['testValue']);
    });
  
    it('should call the beforeHook before the strategy function', () => {
      const testType = 'testType';
      const testFn = sinon.fake.returns(['testValue']);
      const beforeHookFn = sinon.fake();
  
      extend(testType, testFn);
      beforeHook(testType, beforeHookFn);
  
      const strategy = testMap.get(testType);
      strategy();
  
      sinon.assert.calledOnce(beforeHookFn);
      sinon.assert.calledOnce(testFn);
      sinon.assert.callOrder(beforeHookFn, testFn);
    });
  
    it('should call the afterHook after the strategy function', () => {
      const testType = 'testType';
      const testFn = sinon.fake.returns(['testValue']);
      const afterHookFn = sinon.fake.returns(['modifiedValue']);
  
      extend(testType, testFn);
      afterHook(testType, afterHookFn);
  
      const strategy = testMap.get(testType);
      const result = strategy();
  
      sinon.assert.calledOnce(testFn);
      sinon.assert.calledOnce(afterHookFn);
      sinon.assert.callOrder(testFn, afterHookFn);
      expect(result).to.deep.equal(['modifiedValue']);
    });
  
    // Add more tests as needed for edge cases and error handling
  });