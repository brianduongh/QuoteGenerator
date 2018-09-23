import React, { Component } from 'react';
import './app.css';

import QuoteGenerator from '../components/quoteGenerator';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      character: null,
      quote: null,
    };
    this.newQuote = this.newQuote.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
  }

  async componentDidMount() {
    const url = 'https://got-quotes.herokuapp.com/quotes';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      character: data.character,
      quote: data.quote,
      loading: false,
    });
  }

  async newQuote() {
    const url = 'https://got-quotes.herokuapp.com/quotes';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      character: data.character,
      quote: data.quote,
      loading: false,
    });
  }

  handleTweet() {
    const { quote, character } = this.state;
    window.open('https://twitter.com/intent/tweet?text="' + `${quote}"` + ` - ${character}`);
  }

  render() {
    const { loading, character, quote } = this.state;
    return (
      <div className="container">
        {loading || !character ? (
          <div className="loading">loading...</div>
        ) : (
          <QuoteGenerator
            character={character}
            quote={quote}
            newQuote={this.newQuote}
            handleTweet={this.handleTweet}
          />
        )}
      </div>
    );
  }
}

export default App;
