import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Navbar from '../client/Navbar';

configure({adapter: new Adapter()});

describe('All enzyme tests', () => {
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