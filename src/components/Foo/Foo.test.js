import React from 'react';
import { shallow } from 'enzyme';
import Foo from './index';

describe('Foo Test Description', () => {
  it('renders default', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
