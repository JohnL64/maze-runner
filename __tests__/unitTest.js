import Nissan from '../client/containers/Nissan.jsx';
const testData = require('../__tests__/testData');

describe('Nissan Unit Tests', () => {
  let state;
  function setState(updateObj) {
    for (const key in updateObj) {
      state[key] = updateObj[key];
    };
  };

  beforeEach(() => {
    state = {
      board: JSON.parse(JSON.stringify(testData.initialBoardState)),
      headPosition: '0,0',
      targetPosition: '9,9',
      path: [],
      onFire: [],
    };
  });

  describe('Board state should update', () => {
    it('The nissan algorithm should be updating state.board', () => {
      const originalBoard = JSON.parse(JSON.stringify(state.board));
      Nissan.algorithm(state, setState);
      expect(originalBoard).not.toEqual(state.board);
    });
  });
  describe('Path state should update', () => {
    it('The nissan algorithm should be updating state.path', () => {
      const originalPath = JSON.parse(JSON.stringify(state.path));
      Nissan.algorithm(state, setState);
      expect(originalPath).not.toEqual(state.board);
    });
  });
  describe('OnFire state should update', () => {
    it('The nissan algorithm should be updating state.onFire', () => {
      const originalOnFire = JSON.parse(JSON.stringify(state.onFire));
      Nissan.algorithm(state, setState);
      expect(originalOnFire).not.toEqual(state.onFire);
    });
  });
  xdescribe('Put tests here', () => {});
});