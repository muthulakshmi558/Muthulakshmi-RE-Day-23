 const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
 const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
 const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const initialState = {
  loading: false,
  data: [],
  error: ''
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: '' };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: '' };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
