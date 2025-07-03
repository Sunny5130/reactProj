import { useState } from "react";
import Useeffect from "./Useeffect"; // adjust path if in another folder

function ParentToggle() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: "20px",color:"red",backgroundColor:"pink" }}>
      <h1>Parent Component: Toggle Demo</h1>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide Useeffect Component" : "Show Useeffect Component"}
      </button>

      <hr />

      {show && <Useeffect />}
    </div>
  );
}

export default ParentToggle;
