import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from '../actions/jokeActions';

const JokeGenerator = () => {
  const dispatch = useDispatch();
  const { loading, joke, error } = useSelector((state) => state.joke);

  useEffect(() => {
    dispatch(fetchJoke());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchJoke());
  };

  return (
    <div className="text-center mt-4">
      <h2>😂 Random Joke Generator</h2>

      {loading && <p>Loading...</p>}
      {error && (
        <div>
          <p style={{ color: 'red' }}>Error: {error}</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      )}

      {joke && !loading && (
        <div>
          <p><strong>{joke.setup}</strong></p>
          <p>{joke.punchline}</p>
          <button className='btn btn-warning' onClick={handleRetry}>Get Another Joke</button>
        </div>
      )}
    </div>
  );
};

export default JokeGenerator;
