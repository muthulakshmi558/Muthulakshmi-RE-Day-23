export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_POSTS_FAILURE', payload: err.message });
    }
  };
};
