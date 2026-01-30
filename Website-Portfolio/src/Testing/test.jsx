import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>
        Add +1
      </button>
    </div>
  );
}

export default Example;