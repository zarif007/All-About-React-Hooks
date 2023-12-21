import React from 'react'

/*
Managing side effects in functional components is made easy with the useEffect hook. It enables you to perform actions 
after the component has rendered, handle subscriptions, or clean up resources when the component/s of the dependency array unmounts.
*/

const UseEffect = () => {
  return (
    <div>UseEffect</div>
  )
}

/*
Always include a dependency array as the second argument to useEffect. Even if there is not any dependencies that ensures 
that the effect runs only once when the component mounts.

Cleanup Function to Prevent Memory Leaks: Return a cleanup function from useEffect to clear resources like timers, 
subscriptions, or event listeners when the component unmounts or before the effect re-runs.as example, 
useEffect(() => {
  const intervalId = setInterval(() => {
    // Do something
  }, 1000);

  return () => clearInterval(intervalId); // Cleanup function
}, []);

If your component has multiple side effects, consider using multiple useEffect hooks to separate concerns and improve readability.

Stick to using useEffect for side effects (data fetching, subscriptions, etc.). For managing state, prefer using useState and 
for computations, use memoization techniques or useMemo.



*/

export default UseEffect