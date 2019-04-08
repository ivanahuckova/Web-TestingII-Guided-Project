import React from 'react';
import { shallow } from 'enzyme';
import Container, { makeUser } from '../Container';


const wrapper = shallow(<Container />);

describe('Hello World', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('makeUser', () => {
  it('creates a good user', () => {
    expect(makeUser('Peter')).toEqual({ id: '123', name: 'Peter' });
  });
});
