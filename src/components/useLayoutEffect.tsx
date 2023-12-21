import React, {useLayoutEffect} from 'react'

/*
A built-in React hook that allows you to perform side effects after the browser has rendered the DOM and calculated element positions and dimensions, but before it has painted them to the screen.
It's similar to useEffect, but runs synchronously within the same browser paint cycle, ensuring changes are visible immediately.
*/


const UseLayoutEffect = () => {
  const [elementText, setElementText] = React.useState('');

  useLayoutEffect(() => {
    const element = document.querySelector('.content-element');
    setElementText(element?.textContent ?? "")
  }, []); // Empty dependency array to run only once

  return (
    <div>
      <div className="content-element">Content</div>
      <p>From layout effect {elementText}</p>
    </div>
  );
}

/*
Use layout effects for DOM-based measurements: Measuring elements for positioning, sizing, or other calculations that depend on their layout.

Vs UseEffect
Use useEffect for for most side effects.
Use useLayoutEffect for DOM-related synchronization (element's positions and dimensions).
useLayoutEffect: Runs synchronously after DOM mutations but before the browser paints the screen. This means changes are visible immediately.
useEffect: Runs asynchronously after both DOM mutations and browser painting. It schedules updates for the next rendering cycle.
*/

export default UseLayoutEffect