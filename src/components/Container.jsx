import React, { Component } from 'react';
import axios from 'axios';
import './Container.less';
import Quotes from './Quotes';

export default class Container extends Component {
  state = { quotes: [] };

  getQuotes = () => {
    axios.get('https://quotes.org/api').then(res => {
      this.setState({ quotes: res.data });
    });
  };

  render() {
    return (
      <div className="container-hello-world">
        Hello, World!{this.props.lady}
        <Quotes quotes={this.state.quotes} />
        <button onClick={this.getQuotes}>get those quotes</button>
      </div>
    );
  }
}
