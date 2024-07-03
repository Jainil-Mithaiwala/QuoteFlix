import React from 'react';
import './pagenotfound.css';

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or go back to the homepage.</p>
      <a href="/">Go to Homepage</a>
    </div>
  );
}

export default NotFoundPage;
