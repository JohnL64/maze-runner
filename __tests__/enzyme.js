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
  describe('Nav Button Tests', () => {
    let wrapper;
    const props = {
      entryNodeMode: jest.fn(),
      targetNodeMode: jest.fn(),
      addWallMode: jest.fn(),
      clearBoard: jest.fn(),
      runAlgo: jest.fn(),

    };

    beforeAll(() => {
      wrapper = shallow(<Navbar {...props} />);
    });

    it('Should generate all elements', () => {
      expect(wrapper.find('.navbarButton')).toHaveLength(5);
    })
  
    describe('Head Button', () => {
      it('Should execute passed in function when clicked', () => {
        wrapper.find('#startNode').simulate('click');
        expect(props.entryNodeMode).toHaveBeenCalled();
      })

      it('Should display a string value', () => {
        expect(typeof wrapper.find('#startNode').props().children).toBe('string')
      })
      
      it('Should display the correct text', () => {
        expect(wrapper.find('#startNode').props().children).toBe('Set Start Node')

      })
    })
    describe('Target Button', () => {
      it('Should execute passed in function when clicked', () => {
        wrapper.find('#targetNode').simulate('click');
        expect(props.entryNodeMode).toHaveBeenCalled();
      })
      it('Should display a string value', () => {
        expect(typeof wrapper.find('#targetNode').props().children).toBe('string')
      })
      
      it('Should display the correct text', () => {
        expect(wrapper.find('#targetNode').props().children).toBe('Set Target Node')

      })

    })
    describe('Add Wall Button', () => {
      it('Should execute passed in function when clicked', () => {
        wrapper.find('#wallNode').simulate('click');
        expect(props.entryNodeMode).toHaveBeenCalled();
      })
      it('Should display a string value', () => {
        expect(typeof wrapper.find('#wallNode').props().children).toBe('string')
      })
      
      it('Should display the correct text', () => {
        expect(wrapper.find('#wallNode').props().children).toBe('Add Walls')

      })

    })
    describe('Clear Board Button', () => {
      it('Should execute passed in function when clicked', () => {
        wrapper.find('#clearBoard').simulate('click');
        expect(props.entryNodeMode).toHaveBeenCalled();
      })
      it('Should display a string value', () => {
        expect(typeof wrapper.find('#clearBoard').props().children).toBe('string')
      })
      
      it('Should display the correct text', () => {
        expect(wrapper.find('#clearBoard').props().children).toBe('Clear Board')

      })

    })
    describe('Run Algo Button', () => {
      it('Should execute passed in function when clicked', () => {
        wrapper.find('#algo').simulate('click');
        expect(props.entryNodeMode).toHaveBeenCalled();
      })
      it('Should display a string value', () => {
        expect(typeof wrapper.find('#algo').props().children).toBe('string')
      })
      
      it('Should display the correct text', () => {
        expect(wrapper.find('#algo').props().children).toBe('Run Algorithm')

      })

    })






  });
});