import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='feedback-form'>
      <h2>Provide Feedback</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
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
            {/* Add more categories as needed */}
          </select>

          <button type='submit'>Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
