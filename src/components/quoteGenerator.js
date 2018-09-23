import React from 'react';
import { Button } from 'react-bootstrap';
import './quoteGenerator.css';

const QuoteGenerator = props => (
  <div className="quote-container">
    <div className="quote-box">
      <h1>Game of Thrones Quote Generator</h1>
      <p>{props.quote}</p>
      <p className="character">
        -
        {' '}
        {props.character}
      </p>
    </div>
    <div className="buttons">
      <Button onClick={props.newQuote}>New Quote</Button>
      <Button onClick={props.handleTweet}>Tweet</Button>
    </div>
  </div>
);

export default QuoteGenerator;
