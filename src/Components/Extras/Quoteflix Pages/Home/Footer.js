import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email.trim()) {
      setError('Please enter your email.');
    } else {
      try {
        // Make a POST request to your server endpoint to send the email
        const response = await fetch('/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            to: email,
            subject: 'Subscription Confirmation',
            text: 'Thank you for subscribing to our newsletter!'
          })
        });
  
        if (!response.ok) {
          throw new Error('Failed to send email');
        }
  
        // If the email was sent successfully, update state to indicate subscription
        setSubscribed(true);
        setEmail('');
        setError('');
      } catch (error) {
        console.error('Error sending email:', error);
        setError('Failed to send email. Please try again later.');
      }
    }
  };
  
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__copyright'>
        <p style={{fontSize:'18px'}}><span style={{fontSize:'18px'}}>&copy;</span> 2024 QuoteFlix. All rights reserved.</p>
          <p><a href='/privacy-policy'>Privacy Policy</a> | <a href='/terms-of-service'>Terms of Service</a></p>
        </div>
        <div className='footer__social'>
          <a href='https://www.linkedin.com/in/jainil-mithaiwala-85512b275/' className='footer__social-link linkdin'>Linkedin</a> | 
          <a href='https://github.com/Jainil-Mithaiwala' className='footer__social-link github'>Github</a> | 
          <a href='https://www.instagram.com/jainil_mmym/' className='footer__social-link instagram'>Instagram</a>
        </div>
        <div className='footer__subscribe'>
          <h3>Subscribe to Our Newsletter</h3>
          {subscribed ? (
            <p>Thank you for subscribing!</p>
          ) : (
            <form className='footer__subscribe-form' onSubmit={handleSubmit}>
              <input
                type='email'
                placeholder='Enter your email'
                name='email'
                value={email}
                onChange={handleInputChange}
              />
              <button type='submit'>Subscribe</button>
            </form>
          )}
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
        <div className='footer__feedback'>
          <p>Have feedback or suggestions? <a href='/feedback'>Let us know!</a></p>
        </div>
        <div className='footer__faq'>
          <p>Questions? Check out our <a href='/faq'>FAQs</a>.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
