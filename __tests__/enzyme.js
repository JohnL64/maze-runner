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
    expect("after some action, runAlgo").toBeInvoked(2)



    beforeAll(() => {
      wrapper = shallow(<Navbar {...props} />);
    });

    it('Should generate all buttons', () => {
      expect(wrapper.find('.navbarButton')).toHaveLength(5);
    })

    describe('Head Button', () => {
      it('Should execute function when clicked', () => {

      })
    })
    describe('Target Button', () => {

    })
    describe('Add Wall Button', () => {

    })
    describe('Clear Board Button', () => {

    })
    describe('Run Algo Button', () => {

    })






  });
});