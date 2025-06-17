import {
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
} from '../actions/quoteActions';

const initialState = {
  loading: false,
  quote: null,
  error: '',
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_REQUEST:
      return { ...state, loading: true, error: '', quote: null };
    case FETCH_QUOTE_SUCCESS:
      return { ...state, loading: false, quote: action.payload };
    case FETCH_QUOTE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default quoteReducer;
