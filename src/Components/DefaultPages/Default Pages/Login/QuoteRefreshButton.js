import React from 'react';

function QuoteRefreshButton() {
  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
  };
  return (
    <div>
      <button onClick={handleRefresh}>Refresh Random Quote</button>
    </div>
  );
}

export default QuoteRefreshButton;
