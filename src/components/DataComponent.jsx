import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions/errorActions';

function DataComponent() {
  const { loading, data, error } = useSelector((state) => state.errorData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h2>API Status</h2>

      <div>
        <strong>Loading:</strong> {loading ? 'true' : 'false'}
      </div>

      <div>
        <strong>Error:</strong> {error || 'No Error'}
      </div>

      <div>
        <strong>Data:</strong>
        <ul>
          {data.length > 0 ? (
            data.map((user) => <li key={user.id}>{user.name}</li>)
          ) : (
            <li>No Data</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default DataComponent;
