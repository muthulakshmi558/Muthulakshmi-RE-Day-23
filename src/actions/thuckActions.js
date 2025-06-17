export const fetchUsersRequest = () => ({ type: 'FETCH_USERS_REQUEST' });
export const fetchUsersSuccess = (users) => ({ type: 'FETCH_USERS_SUCCESS', payload: users });
export const fetchUsersFailure = (error) => ({ type: 'FETCH_USERS_FAILURE', payload: error });

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};
