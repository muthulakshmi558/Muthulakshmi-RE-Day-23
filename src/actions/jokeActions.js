export const fetchJoke = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_JOKE_REQUEST' });

    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      dispatch({ type: 'FETCH_JOKE_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_JOKE_FAILURE', payload: error.message });
    }
  };
};
