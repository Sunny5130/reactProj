import { useState } from "react";

function Adduser() {
  const [name, setName] = useState("");
  const [nage, setAge] = useState("");
  const [address, setAddress] = useState("");

  const createUser = async () => {
    console.log(name, nage, address);

    const url = "http://localhost:5000/Admin";
    const user = {
      name: name,
      age: nage,
      address: address,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    if (response.ok) {
      alert("User added successfully!");
    } else {
      alert("Failed to add user");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add Users</h1>
      <h2>Name:</h2>
      <input onChange={(e) => setName(e.target.value)} type="text" />

      <h2>Age:</h2>
      <input onChange={(e) => setAge(e.target.value)} type="number" />

      <h2>Address:</h2>
      <input onChange={(e) => setAddress(e.target.value)} type="text" />

      <br /><br />
      <button onClick={createUser}>Add User</button>
    </div>
  );
}

export default Adduser;
