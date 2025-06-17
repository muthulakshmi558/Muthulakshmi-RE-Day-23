const initialState = {
  users: [],
  loading: false,
  error: null,
};

const promiseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING':
      return { ...state, loading: true, error: null };
    case 'FETCH_USERS_FULFILLED':
      return { ...state, loading: false, users: action.payload };
    case 'FETCH_USERS_REJECTED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default promiseReducer;
