import { useReducer } from "react";

// Reducer to manage form field updates
function reducer(state, action) {
  if (action.type === "submit") {
    console.log("Submitted Data:", state);
    return state; // no state change on submit
  }

  return {
    ...state,
    [action.type]: action.payload,
  };
}
// Initial form state
const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
  city: "",
};

function Usereduce() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submit" });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Form Using useReducer</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
      /><br /><br />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
      /><br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => dispatch({ type: "password", payload: e.target.value })}
      /><br /><br />

      <input
        type="text"
        placeholder="Address"
        onChange={(e) => dispatch({ type: "address", payload: e.target.value })}
      /><br /><br />

      <input
        type="text"
        placeholder="City"
        onChange={(e) => dispatch({ type: "city", payload: e.target.value })}
      /><br /><br />

      <button onClick={handleSubmit}>Submit</button>

      <h3>Form Data:</h3>
      <p><b>Name:</b> {state.name}</p>
      <p><b>Email:</b> {state.email}</p>
      <p><b>Password:</b> {state.password}</p>
      <p><b>Address:</b> {state.address}</p>
      <p><b>City:</b> {state.city}</p>
    </div>
  );
}

export default Usereduce;
