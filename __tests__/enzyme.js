import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Board from '../client/containers/board';
import Button from '../client/containers/button';

configure({adapter: new Adapter()});

describe('All enzyme Board/Button tests', () => {
  describe('Board/Button tests', () => {
    let wrapper;

    const props = {
      className: '',
      id: '',
      onMouseDown: jest.fn(),
      onMouseOver: jest.fn(),
      onClick: jest.fn()
    };

    beforeAll(() => {
      wrapper = shallow(<Button {...props} />);
    });

    it('Should generate am HTML button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });

    it('Should execute passed in function when clicked', () => {
      wrapper.find('button').simulate('click');
      expect(props.onClick).toHaveBeenCalled();
    });

  });
});