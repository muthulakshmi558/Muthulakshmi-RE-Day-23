import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/fetchUsers';

const DispatchThunk = () => {
  const dispatch = useDispatch(); // ✅ Get dispatch function

  const { loading, users = [], error } = useSelector((state) => state.user); // ✅ Get state

  useEffect(() => {
    dispatch(fetchUsers()); // ✅ Dispatch the thunk
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default DispatchThunk;
