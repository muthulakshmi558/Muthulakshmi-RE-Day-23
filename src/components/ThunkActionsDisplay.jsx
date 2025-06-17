import { useSelector, useDispatch } from "react-redux";
import { asyncAction } from '../actions/asyncActions';

const AsyncComponent = () => {
  const dispatch = useDispatch();
const message = useSelector((state) => state.async?.message);

  return (
    <div>
      <p>{message}</p>
      <button className="btn btn-primary" onClick={() => dispatch(asyncAction())}>
        Run Async Action
      </button>
    </div>
  );
};

export default AsyncComponent;
