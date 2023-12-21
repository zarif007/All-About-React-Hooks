import React, { useState, useTransition } from "react";

/*
Allows you to update state without immediately blocking the UI.
Useful for managing expensive updates or preventing UI lags when handling user interactions.
If a user-initiated action conflicts with a transition, React prioritizes the user interaction.

For demonstration, we need 2 states, first state will return the user given number and 2nd state will do a 
heavy computation (like iterating 300000 times). 
Here we will use a normal way and useTransition way to do it. 
*/

const UseTransition = () => {
  const [isPending, startTransition] = useTransition();

  const [userGivenNumber, setUserGivenNumber] = useState(0);
  const [heavilyComputedData, setHeavilyComputedData] = useState<number[]>([]);

  const heavyTask = () => {
    const list: number[] = [];
    for (let i = 0; i < 300000; i++) {
      list.push(i + userGivenNumber);
    }
    setHeavilyComputedData(list);
  };

  const handleNormally = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserGivenNumber(() => parseInt(e.target.value));
    heavyTask();
  };
  const handleWithTransition = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserGivenNumber(() => parseInt(e.target.value));
    startTransition(heavyTask);
  };

  return (
    <div>
      <h1>Normal way</h1>
      <input
        type="number"
        placeholder="Enter number"
        onChange={handleNormally}
      />
      <h2>User given Number {userGivenNumber}</h2>
      <h2>Heavily computer number {heavilyComputedData.join(", ")}</h2>

      <h1>Using use transaction</h1>
      <input
        type="number"
        placeholder="Enter number"
        onChange={handleWithTransition}
      />
      <h2>User given Number {userGivenNumber}</h2>
      <h2>
        Heavily computer number{" "}
        {isPending ? "Computing..." : heavilyComputedData.join("\n")}
      </h2>
    </div>
  );
};

/*
Ideal for updates that aren't immediately essential for user interaction or core functionality. (Fetching additional data after initial content display
Applying expensive filters or calculations
Rendering complex visualizations)

Use the isPending boolean to indicate loading states or transitions to the user, enhancing user experience.

Avoid nesting transitions: Nesting startTransition calls can lead to unpredictable behavior.

Consider Suspense for data fetching: For data fetching scenarios, Suspense might be a more streamlined approach.
*/


export default UseTransition;
