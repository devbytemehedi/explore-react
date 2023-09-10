import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleCountAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleCountReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div
      style={{
        border: "2px solid blue",
        margin: "15px",
        padding: "15px",
        borderRadius: "25px",
      }}
    >
      <h3>Counter: {count}</h3>
      <button onClick={handleCountAdd}>Add</button>
      <button onClick={handleCountReduce}>Minus</button>
    </div>
  );
}
