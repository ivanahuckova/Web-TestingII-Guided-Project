import React from 'react';
import * as rtl from 'react-testing-library';
import Container from './Container';

afterEach(rtl.cleanup);

jest.mock('axios', () => {
  return {
    get: () => {
      return Promise.resolve({
        data: [
          { id: 1, text: 'Blabla1' },
          { id: 2, text: 'Blabla2' },
          { id: 3, text: 'Blabla3' },
          { id: 4, text: 'Blabla4' },
        ],
      });
    },
  };
});

// 1 - we need some stuff from the library but the wrapper as well
// 2 - remember about cleaning up after each test
// 3 - prefer regular expressions to raw text
// 4 - wrappper exposes different methods that look alike!
// - get will crash and burn fast if no match found
// - query will rreturn null if no match
// - find will wait and only fail after 5 seconds

describe('Container', () => {
  it('outputs Hello world', () => {
    const wrapper = rtl.render(<Container />);
    expect(wrapper.getByText(/world/i));
  });

  it('does not output spinner "loading..."', () => {
    const wrapper = rtl.render(<Container lady="gaga" />);
    expect(wrapper.queryByText(/loading/i)).toBeFalsy();
    console.log(wrapper.debug());
  });

  it('renders the quotes', async () => {
    const wrapper = rtl.render(<Container />);
    expect(wrapper.queryByText(/bla/i)).toBeFalsy();
    // fire the event to bring that quotes
    rtl.fireEvent.click(wrapper.getByText(/get those/i));
    await wrapper.findByText(/bla/i);
    // console.log(wrapper.debug());
  });
});
