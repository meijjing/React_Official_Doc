import React, { useReducer } from "react";

function UseReducerExample() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "reset":
        return initialState;
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>You clicked {state.count} times</p>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increase" })}>-</button>
      <button onClick={() => dispatch({ type: "decrease" })}>+</button>
    </>
  );
}

export default UseReducerExample;
