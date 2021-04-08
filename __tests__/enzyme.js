import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

const Board = require('../client/containers/board.jsx');

configure({adapter: new Adapter()});

describe('All tests', () => {
  describe('Board Tests', () => {
    let wrapper;
    const props = {
        board: {},
        mouseIsPressed: false,
        entryNodeMode: false,
        targetNodeMode: false,
        wallMode: false,
        headPosition: '0,0',
        targetPosition: '9,9',
        path: [],
        onFire: [],
    };

    beforeAll(() => {
      wrapper = shallow(<Board {...props} />);
    });

    it('Renders buttons as child components', () => {
        console.log(wrapper);
      expect(wrapper.containsMatchingElement(<Button/>).toEqual(true));
    });
  });







  xdescribe('Put tests here', () => {});
  xdescribe('Put tests here', () => {});
  xdescribe('Put tests here', () => {});
  xdescribe('Put tests here', () => {});
});