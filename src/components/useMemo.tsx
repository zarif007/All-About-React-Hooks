import React, { useEffect, useMemo, useState } from "react";

/*
useMemo is a React hook that is used for memoization. Memoization is an optimization technique where the result of a function call is cached and 
returned when the same inputs occur again. This can be particularly useful in React when you want to optimize the performance of your components
by memoizing the results of expensive computations.

Mainly, it is used to avoid unimportant computation on render caused by a different state.

Here, for example we have a counter and a heavyTask function, the count has nothing to do with heavy task
But even if we update the counter, the heavyTask function will be executed during rerender. In order 
to avoid this, we wrap that function with useMemo to memoized the computation
*/

const heavyTask = () => {
  let counter = 0;
  for (let i = 0; i < 3000000000; i++) {
    counter += 1;
  }
  return counter;
};

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const heavilyComputedValue = useMemo(() => heavyTask(), []);

  return (
    <div>
      <h2>Normal Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <h3>Heavy Value {heavilyComputedValue}</h3>
    </div>
  );
};

/*
Only use useMemo when you have identified a specific piece of computation that is expensive and doesn't need to be recomputed on every render.
Ensure that you include all the dependencies in the dependency array that your memoized function relies on. This helps React know when to recalculate the memoized value.
If your component has multiple memoized values, consider separating the memoization logic into smaller, more manageable pieces. 

vs useState
Don't use it for state variables, use useState instead

vs useEffect
useEffect runs after render, while useMemo runs during render.
useEffect for Data fetching (API calls)
Subscriptions (e.g., to web sockets)
Setting up timers etc

useMemo for Memoizing expensive computations or formatting operations
Caching derived data based on props or state
*/

// vs useState, useReducer, useEffect

export default UseMemo;
