import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Footer.css';

const Footer = () => {
  const [randomQuote, setRandomQuote] = useState('');
  const [quoteOfTheDay, setQuoteOfTheDay] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    RandomQuote();
    QuotesofTheDay();
  }, []);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('https://quoteflix-email-service.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: 'Quoteflix by Jainil',
          text: `Quotes of The Day: ${quoteOfTheDay} \n Random Quote: ${randomQuote} \n from QuoteFlix \n created by Jainil`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubscribed(true);
      setEmail('');
      setError('');
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send email. Please try again later.');
    }
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__copyright'>
          <p>&copy; 2024 QuoteFlix. All rights reserved.</p>
          <p>
            <a href='/privacy-policy'>Privacy Policy</a> |{' '}
            <a href='/terms-of-service'>Terms of Service</a>
          </p>
        </div>
        <div className='footer__social'>
          <a
            href='https://www.linkedin.com/in/jainil-mithaiwala-85512b275/'
            className='footer__social-link linkedin'
          >
            Linkedin
          </a>{' '}
          |{' '}
          <a
            href='https://github.com/Jainil-Mithaiwala'
            className='footer__social-link github'
          >
            Github
          </a>{' '}
          |{' '}
          <a
            href='https://www.instagram.com/jainil_mmym/'
            className='footer__social-link instagram'
          >
            Instagram
          </a>
        </div>
        <div className='footer__subscribe'>
          <h3>Receive a random Quote from QuoteFlix</h3>
          {subscribed ? (
            <p style={{color:"green"}}>Mail Sent Successfully!</p>
          ) : (
            <form className='footer__subscribe-form' onSubmit={handleSubmit}>
              <input
                type='email'
                placeholder='Enter your email'
                name='email'
                value={email}
                onChange={handleInputChange}
              />
              <button type='submit'>Sent</button>
            </form>
          )}
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
        <div className='footer__feedback'>
          <p>
            Have feedback or suggestions? <a href='/feedback'>Let us know!</a>
          </p>
        </div>
        <div className='footer__faq'>
          <p>
            Questions? Check out our <a href='/faq'>FAQs</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
