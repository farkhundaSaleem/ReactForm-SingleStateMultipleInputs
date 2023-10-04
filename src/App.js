import React, { useState } from "react";
import "./App.css";

const App = () => {
  // useState hook to store form inputs as a single state object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    password: "",
  });

  const [submittedInputs, setSubmittedInputs] = useState([]);

  // Event handler for form submission
  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page
    // Adds the current form data to the submittedInputs array in state
    setSubmittedInputs([...submittedInputs, formData]);
    // Clears the form input fields after submission
    setFormData({ name: "", email: "", contactNo: "", password: "" });
  };

  // JSX code for the component's UI
  return (
    <div>
      {/* Form for inputting name, email, and contact number */}
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
          />
        </div>

        <div>
          <label htmlFor="contactNo">Contact No: </label>
          <input
            type="tel"
            id="contactNo"
            onChange={(e) =>
              setFormData({ ...formData, contactNo: e.target.value })
            }
            value={formData.contactNo}
          />
        </div>

        <div>
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
          />
        </div>

        <div>
          <button>Click</button>
        </div>
      </form>

      {/* Display submitted inputs */}
      <div>
        <h2>Submitted Inputs:</h2>
        <ul>
          {/* Maps over the submittedInputs array and displays name, email, and contact number */}
          {submittedInputs.map((input, index) => (
            <li key={index}>
              <strong>Name:</strong> {input.name} <br />
              <strong>Email:</strong> {input.email}
              <br />
              <strong>Password:</strong> {input.password} <br />
              <strong>Contact No:</strong> {input.contactNo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
