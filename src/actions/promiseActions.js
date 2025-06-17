export const fetchUsers = () => {
  return {
    type: 'FETCH_USERS',
    payload: fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()),
  };
};
