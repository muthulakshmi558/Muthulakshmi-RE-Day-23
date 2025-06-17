import { legacy_createStore as createStore, applyMiddleware, combineReducers,compose } from 'redux';
import {thunk} from 'redux-thunk';
import asyncReducer from '../reducers/asyncReducer';
import userReducer from '../reducers/userReducer';
import loadingReducer from '../reducers/loadingReducer';
import errorReducer from '../reducers/errorReducer';
import fetchingUserReducer from '../reducers/fetchingUserReducer';
import fetchingPostReducer from '../reducers/fetchingPostReducer';
import loggerMiddleware from '../actions/loggerMiddleware';
import promiseMiddleware from '../actions/promiseMiddleware';
import promiseReducer from '../reducers/promiseReducer';
import quoteReducer from '../reducers/quoteReducer';
import thunkReducer from '../reducers/thunkReducer';
import weatherReducer from '../reducers/weatherReducer';
import jokeReducer from '../reducers/jokeReducer';


const rootReducer = combineReducers({
  user: userReducer,
  async: asyncReducer,
  loading: loadingReducer,
  errorData: errorReducer,
  fetch: fetchingUserReducer,
  post: fetchingPostReducer,
  promise:promiseReducer,
  quoteData: quoteReducer,
  thunk:thunkReducer,
  weather:weatherReducer,
  joke:jokeReducer,


});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, loggerMiddleware,promiseMiddleware))
);

export default store;
