import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/ducks/counter";

const Counter = () => {
  const count = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>The couter:</h4>
      <div className="row">
        <div className="col-4 offset-4">
          <div className="row justify-content-center">
            <button className="btn btn-danger" onClick={() => dispatch(decrementCounter())}>
              -
            </button>
            <div className="m-3">{count}</div>
            <button className="btn btn-success" onClick={() => dispatch(incrementCounter())}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
