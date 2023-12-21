import React, { useReducer } from "react";

/*
For more complex state management scenarios, the useReducer hook is a powerful alternative. It employs a reducer function to handle state transitions based on dispatched actions. 
This hook is particularly useful when the state logic becomes intricate or involves multiple dependent variables.
*/

const UseReducer = () => {
  const initialState = { count: 0 };

  function reducer(
    state: {
      count: number;
    },
    action: { type: string }
  ) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

/*
Separate Logic Into a Reducer Function
Leverage Functional Updates (dispatch((prev) => ({ count: prev.count + 1 })))
Action Types: Use descriptive action types for each state change operation. This improves code readability and reduces errors.
Switch Statements: Consider using switch statements for handling different action types within your reducer, especially for complex ones.

*/

export default UseReducer;
