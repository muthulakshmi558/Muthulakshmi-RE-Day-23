import axios from 'axios';
 const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
 const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
 const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};
