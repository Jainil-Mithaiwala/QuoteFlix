import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [otherCategory, setOtherCategory] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    if (selectedCategory === 'Other') {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
      setOtherCategory('');
    }
  };

  const handleOtherCategoryChange = (e) => {
    setOtherCategory(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://quoteflix-feedback-service.onrender.com/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feedback,
          category: category === 'Other' ? otherCategory : category,
          otherCategory: category === 'Other' ? otherCategory : '',
          email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Handle error state if needed
    }
  };

  const handleAnotherFeedback = () => {
    setFeedback('');
    setCategory('');
    setOtherCategory('');
    setEmail('');
    setSubmitted(false);
    setShowOtherInput(false);
  };

  return (
    <div className='feedback-form'>
      <h2>Provide Feedback</h2>
      {submitted ? (
        <div>
          <p>Thank you for your feedback!</p>
          <button onClick={handleAnotherFeedback}>Submit Another Feedback</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Enter your email...'
            required
          />
          <label htmlFor='feedback'>Feedback:</label>
          <textarea
            id='feedback'
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder='Enter your feedback...'
            required
          ></textarea>

          <label htmlFor='category'>Category:</label>
          <select id='category' value={category} onChange={handleCategoryChange} required>
            <option value=''>Select a category</option>
            <option value='Bug Report'>Bug Report</option>
            <option value='Feature Request'>Feature Request</option>
            <option value='General Feedback'>General Feedback</option>
            <option value='Website Design'>Website Design</option>
            <option value='Performance Issue'>Performance Issue</option>
            <option value='Account Issue'>Account Issue</option>
            <option value='Billing Issue'>Billing Issue</option>
            <option value='Customer Support'>Customer Support</option>
            <option value='Product Quality'>Product Quality</option>
            <option value='Other'>Other</option>
          </select>

          {showOtherInput && (
            <div className='other-category-input'>
              <label htmlFor='otherCategory'>Other Category:</label>
              <input
                id='otherCategory'
                value={otherCategory}
                onChange={handleOtherCategoryChange}
                placeholder='Enter other category...'
                required
              />
            </div>
          )}
          <button type='submit'>Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
