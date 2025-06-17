import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/loadingActions';

function LoadingList() {
  const dispatch = useDispatch();
const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h3>User List</h3>

      {loading && <p className="text-primary">🔄 Loading users...</p>}
      {error && <p className="text-danger">❌ {error}</p>}

      {!loading && !error && (
        <ul className="list-group">
          {users.map((user) => (
            <li className="list-group-item" key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LoadingList;
