import { useEffect, useState } from "react";

function Useeffect() {
  const [val, setCount] = useState(0);
  const [val2, setCount2] = useState(0);

  useEffect(() => {
    console.log("✅ Component Mounted");

    return () => {
      console.log("❌ Component Will Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("♻️ Component Updated: val =", val, ", val2 =", val2);
  }, [val, val2]);

  return (
    <>
      <h2>Useeffect Component</h2>
      <h3>Positive Count: {val}</h3>
      <button onClick={() => setCount(val + 1)}>Increase</button>

      <h3>Negative Count: {val2}</h3>
      <button onClick={() => setCount2(val2 - 1)}>Decrease</button>
    </>
  );
}

export default Useeffect;
