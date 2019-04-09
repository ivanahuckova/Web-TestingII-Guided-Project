import React from 'react';
import * as rtl from 'react-testing-library';
import Quotes from './Quotes';

afterEach(rtl.cleanup);

// caputure a collection easilly:
// - atach data-testid attributes all over the place
// - wrapper.getAllByTestId
const quotes = [
  { id: 1, text: 'bla bla1' },
  { id: 2, text: 'bla bla2' },
  { id: 3, text: 'bla bla3' },
  { id: 4, text: 'bla bla4' },
];

describe('Quotes', () => {
  it('it returns a sad message if quotes array is empty', () => {
    const wrap = rtl.render(<Quotes quotes={[]} />);
    expect(wrap.getByText(/sad/i));
  });

  it('it returns a sad message if quotes array is empty', () => {
    const wrap = rtl.render(<Quotes />);
    expect(wrap.getByText(/sad/i));
  });

  it('puts ti the dom the right number of qoutes', () => {
    const wrap = rtl.render(<Quotes quotes={quotes} />);
    const quotesArray = wrap.getAllByTestId('quote');
    expect(quotesArray).toHaveLength(quotes.length);
  });
});
