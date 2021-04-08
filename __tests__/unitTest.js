const { nissan } = require('../client/containers/Nissan');
const testData = require('../__tests__/testData');

describe('Nissan Unit Tests', () => {
  let state;
  
  function setState(updateObj) {
    for (const key in updateObj) {
      state.key = updateObj[key];
    };
  };

  beforeEach(() => {
    state = {
      board: JSON.parse(JSON.stringify(testData.initialBoardState)),
      headPosition: '0,0',
      targetPosition: '9,9',
      path: [],
      onFire: [],
    },
  });

  describe('Put tests here', () => {

  });
  xdescribe('Put tests here', () => {});
  xdescribe('Put tests here', () => {});
  xdescribe('Put tests here', () => {});
  xdescribe('Put tests here', () => {});
});