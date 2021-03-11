import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/ducks/counter";

const Counter = () => {
  const count = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row">
        <h4>The couter:</h4>
        <div className="row justify-content-center">
          <div className="col-4 offset-4">
            <button className="btn btn-danger" onClick={() => dispatch(decrementCounter())}>
              -
            </button>
            <h3 className="m-3">{count}</h3>
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
