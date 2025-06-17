const promiseMiddleware = store => next => action => {
  if (action.payload && typeof action.payload.then === 'function') {
    store.dispatch({ type: `${action.type}_PENDING` });

    action.payload
      .then(result => {
        store.dispatch({ type: `${action.type}_FULFILLED`, payload: result });
      })
      .catch(error => {
        store.dispatch({ type: `${action.type}_REJECTED`, payload: error });
      });
  } else {
    return next(action); 
  }
};

export default promiseMiddleware;
