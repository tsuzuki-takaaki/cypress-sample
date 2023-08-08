import { useState } from "react"

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 id="counter">Count: {counter}</h1>
      <button id="1" onClick={() => {setCounter((prev) => prev + 1)}}>+</button>
      <button onClick={() => {setCounter((prev) => prev - 1)}}>-</button>
    </div>
  )
}
