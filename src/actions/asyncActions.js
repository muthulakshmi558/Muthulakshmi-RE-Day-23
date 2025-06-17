export const asyncAction = () => {
  return (dispatch) => {
    setTimeout(() => {
      console.log("Async Action Called");
      dispatch({ type: "ASYNC_ACTION_DONE" });
    }, 1000);
  };
};
