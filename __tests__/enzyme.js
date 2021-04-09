import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Board from '../client/containers/board.jsx';

configure({adapter: new Adapter()});

describe('All tests', () => {
  describe('Board Tests', () => {
    let wrapper;
    const props = {
      state : {
      board: {'0,0': 44},
      mouseIsPressed: false,
      entryNodeMode: false,
      targetPosition: '9,9',
      path: [],
      onFire: [{'0,0':22}],
    //   state={this.state},
    //   setState={this.setState}
    }};

    beforeAll(() => {
       wrapper = shallow(
      <Board {...props}
        className='regularGrid'
        onMouseDown={() => { eventHandlers.handleMouseDown(property, props.state, props.setState); }}
        onMouseOver={() => { eventHandlers.handleMouseEnter(property, props.state, props.setState); }}
        onMouseUp={() => { eventHandlers.handleMouseUp(props.state, props.setState); }}
        onClick={() => {
          eventHandlers.handleHead(property, props.state, props.setState);
          eventHandlers.handleTarget(property, props.state, props.setState);
        }}
      />
      );
    //   console.log('Log wrapper ', wrapper.debug())
    });

    it('Renders a button', () => {
    // console.log('wrapper.html ', wrapper.html())
    expect(wrapper.contains(
        <button>
        </button>
      ))
    });
  });


  xdescribe('Put tests here', () => {});
  xdescribe('Put tests here', () => {});
  xdescribe('Put tests here', () => {});
  xdescribe('Put tests here', () => {});
});