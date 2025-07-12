import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Reset errors
    setNameError("");
    setEmailError("");

    // Name validation
    const specialCharRegex = /[^a-zA-Z0-9 ]/; // detects special chars
    if (!name.trim()) {
      setNameError("Name is required");
      valid = false;
    } else if (specialCharRegex.test(name)) {
      setNameError("Name must not contain special characters");
      valid = false;
    } else if (name.length < 5 || name.length > 10) {
      setNameError("Name must be 5-10 characters long");
      valid = false;
    }

    // Email validation
    if (!email.endsWith(".com")) {
      setEmailError("Email must end with '.com'");
      valid = false;
    }

    if (valid) {
      alert(`Submitted:\nName: ${name}\nEmail: ${email}`);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          textAlign: "center",
          border: "2px solid black",
          backgroundColor: "skyblue",
          padding: "20px",
          maxWidth: "400px",
          margin: "auto"
        }}
      >
        <h1>Form Validation</h1>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <span style={{ color: "red", fontSize: "14px" }}>{nameError}</span>
        <br /><br />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <span style={{ color: "red", fontSize: "14px" }}>{emailError}</span>
        <br /><br />

        <button type="submit">Submit</button>
        <br /><br /><br /><br />
      </form>
    </>
  );
}

export default Form;