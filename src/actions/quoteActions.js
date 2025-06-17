export const FETCH_QUOTE_REQUEST = 'FETCH_QUOTE_REQUEST';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';

export const fetchQuote = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_QUOTE_REQUEST });

    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      dispatch({ type: FETCH_QUOTE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_QUOTE_FAILURE, payload: error.message });
    }
  };
};
