import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../actions/quoteActions';

function QuoteGenerator() {
  const dispatch = useDispatch();
  const { loading, quote, error } = useSelector((state) => state.quoteData);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Random Quote Generator</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {quote && (
        <div>
          <blockquote>"{quote.content}"</blockquote>
          <p>— {quote.author}</p>
        </div>
      )}

      <button className='btn btn-primary' onClick={() => dispatch(fetchQuote())}>
        Get New Quote
      </button>
    </div>
  );
}

export default QuoteGenerator;
