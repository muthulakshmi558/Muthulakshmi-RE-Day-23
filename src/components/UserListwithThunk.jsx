import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/thuckActions';

function UserListThunk() {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.thunk);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h3>User List</h3>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserListThunk;
