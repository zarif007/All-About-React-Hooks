import React, { useState } from "react";

/*
The useState hook is fundamental for managing state within functional components. It allows you to declare state variables and provides a function to update them.
That rerender the whole component when the state changes. 
This hook is versatile and suitable for handling simple to moderately complex state logic
*/

const UseState = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseState;

/*

Provide Meaningful Variable Names: Choose variable names that clearly convey the purpose of the state.
Use Functional Updates (prev) => ({ count: prev.count + 1 }) for Complex State Logic: This ensures that you are working with the latest state and helps prevent issues related to asynchronous state updates.
Separate State Declarations: If you have multiple state variables, declare them separately for enhancing code organization and making it easier to manage
Avoid Nested useState: For complex state, consider useReducer or a state management library for better organization.


*/