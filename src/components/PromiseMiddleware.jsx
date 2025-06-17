import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import  {fetchUsers}  from '../actions/promiseActions'; 

function PromiseUserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers()); 
  }, [dispatch]);

  return <div>...</div>;
}

export default PromiseUserList;