import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './randomquote.css';

const RandomQuoteGenerater = () => {
  const [randomQuote, setRandomQuote] = useState('');
  const [quoteOfTheDay, setQuoteOfTheDay] = useState('');

  useEffect(() => {
    RandomQuote();
    QuotesofTheDay();
  }, []);

  const RandomQuote = async () => {
    try {
      const response = await axios.get('https://random-quotes-generator-api.onrender.com/');
      setRandomQuote(response.data.travel_quote);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  const QuotesofTheDay = async () => {
    try {
      const response = await axios.get('https://quotes-of-the-day-api.onrender.com/');
      setQuoteOfTheDay(response.data.QuotesofTheDay);
    } catch (error) {
      console.error('Error fetching quote of the day:', error);
    }
  };

  const copyQuotesOfTheDay = () => {
    navigator.clipboard.writeText(quoteOfTheDay);
  };

  const handleRefresh = () => {
    RandomQuote();
  };

  const copyRandomQuote = () => {
    navigator.clipboard.writeText(randomQuote);
  };

  return (
    <div  className='container'>
      <div>
        <h2 className='Heading'>Quotes Of the Day</h2>
        <div className='box'>
        <p className='quotebox'>{quoteOfTheDay}</p>
        </div>
        <div className='btns'>
        <button class="bn32" onClick={copyQuotesOfTheDay}>Copy Today's Quote</button>
        </div>        
      </div>
      <div>
        <h2  className='Heading'>Travel Quote</h2>
        <div className='box'>
        <p className='quotebox'>{randomQuote}</p>
        </div>
        <div className='btns'>
        <button class="bn32" onClick={handleRefresh}>Refresh Quote</button>
        <button class="bn32" onClick={copyRandomQuote} id="randomquotescopybtn">Copy Travel Quote</button>
        </div>
      </div>
    </div>
  );
};

export default RandomQuoteGenerater;
