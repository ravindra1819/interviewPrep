import { useCallback, useMemo } from "react";
import { useState } from "react"

export const UseMemoCallbackHook = () => {

  const [counter, setCounter] = useState(0);
  const [minus, setMinus] = useState(100);

  const squaredValue = () => {
    console.log("Expensive calculations.....", minus);

    return counter * counter;
  };

  // const squaredValueMemo = useMemo(squaredValue, [counter]);
  const squaredValueCallback = useCallback(squaredValue, [counter])

  return (
    <div>
      {/* <h2>Squared Value: {squaredValueMemo}</h2> */}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <h2>Second counter Minus : {minus}</h2>
      <button onClick={() => setMinus(minus - 2)}>Decrement</button>

      <h2>Squared Counter: {squaredValueCallback()}</h2>

    </div>
  )
}