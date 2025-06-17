const initialState = {
  message: "Waiting for async action...",
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ASYNC_ACTION_DONE":
      return {
        ...state,
        message: "Async Action Completed!",
      };
    default:
      return state;
  }
};

export default asyncReducer;
