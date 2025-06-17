import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/fetchingPostActions';

function FetchPostList() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h4>Posts</h4>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>{posts.slice(0, 5).map((p) => <li key={p.id}>{p.title}</li>)}</ul>
    </div>
  );
}

export default FetchPostList;
