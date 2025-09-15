// Don't put this initially
"use client";

import { useState } from "react";

export default function StateNew() {
  //If you don't put initial value, then you would get this error -- count is possibly undefined.
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>The count: {count}</h2>

      {/**  Why we pass functions like this: () => setCount(count + 1) instead of setCount(count + 1)
       *    A quick refresher on javascript - we pass the reference of the function by typing only its name without paranthesis.
       *    or if you have arguments then we use inline arrow functions to execute the function on the event action.
       *    We never use function with paranthesis as it will be immediately on render without minding the event listeners.
       */}
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}
