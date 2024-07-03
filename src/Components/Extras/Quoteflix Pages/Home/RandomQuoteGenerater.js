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
      setRandomQuote(response.data.random_quotes_quote);
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
    <div className='homecontainer'>
      <div className='container1'>
        <h2 className='Heading' style={{ margin: "0px 0px 15px 0px" }}>More Categories</h2>
        <ul>
          <li className='homecategories'><a href="/family_quotes">Family Quotes</a></li>
          <li className='homecategories'><a href="/friends_quotes">Friends Quotes</a></li>
          <li className='homecategories'><a href="/love_quotes">Love Quote</a></li>
          <li className='homecategories'><a href="/inspirational_quotes">Inspirational Quote</a></li>
          <li className='homecategories'><a href="/environmental_quotes">Environmental Quote</a></li>
          <li className='homecategories'><a href="/time_quotes">Time Quote</a></li>
          <li className='homecategories'><a href="/creativity_quotes">Creativity Quote</a></li>
          <li className='homecategories'><a href="/sucess_quotes">Success Quote</a></li>
          <li className='homecategories'><a href="/funny_quotes">Funny Quote</a></li>
          <li className='homecategories'><a href="/business_quotes">Business Quote</a></li>
        </ul>
      </div>
      <div className='container2'>
        <div>
          <h1 className='Heading'>Quotes Of the Day</h1>
          <div className='box'>
            {quoteOfTheDay ? (
              <div>
                <p className='quotebox'>{quoteOfTheDay}</p>
              </div>
            ) : (
              <div className='quotebox'>
                <p className='loaderhome'></p>
              </div>
            )}
          </div>
          <div className='btns'>
            <button class="bn32" onClick={copyQuotesOfTheDay}>Copy Today's Quote</button>
          </div>
        </div>
        <div>
          <h1 className='Heading'>Random Quote</h1>
          <div className='box'>
            {randomQuote ? (
              <div>
                <p className='quotebox'>{randomQuote}</p>
              </div>
            ) : (
              <div className='quotebox'>
                <p className='loaderhome' ></p>
              </div>
            )}
          </div>
          <div className='btns'>
            <button class="bn32" onClick={handleRefresh}>Refresh Quote</button>
            <button class="bn32" onClick={copyRandomQuote} id="randomquotescopybtn">Copy Random Quote</button>
          </div>
        </div>
      </div>
      <div className='container3'>
        <ul>
          <h2 className='Heading' style={{ margin: "0px 0px 15px 0px" }}>More Categories</h2>
          <li className='homecategories'> <a href="/education_quotes">Education Quote </a></li>
          <li className='homecategories'><a href="/food_quotes">Food Quote</a></li>
          <li className='homecategories'><a href="/leadership_quotes">Leadership Quote</a></li>
          <li className='homecategories'><a href="/religious_quotes">Religious Quote</a></li>
          <li className='homecategories'><a href="/life_quotes">Life Quote</a></li>
          <li className='homecategories'><a href="/travel_quotes">Travel Quote</a></li>
          <li className='homecategories'><a href="/coding_quotes">Coding Quote</a></li>
          <li className='homecategories'><a href="/motivational_quotes">Motivational Quote</a></li>
          <li className='homecategories'><a href="/nature_quotes">Nature Quote</a></li>
          <li className='homecategories'><a href="/literary_quotes">Literary Quote</a></li>

        </ul>
      </div>
    </div>
  );
};

export default RandomQuoteGenerater;