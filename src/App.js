// import "./App.css";
// import List from "./components/list/List";
// import Additems from "./components/additems/Additems";

// function App() {

//   const arr = ["Item a", "Item b"];
// const onAddhandeler=(data)=>{
// console.log(data)
// }
//   return (
//     <div className="App">

//       <Additems onAdd={onAddhandeler}/>
//       <List arr={arr}/>
//     </div>
//   );
// }

// export default App;

// DARK MODE

// import React, { useState } from "react";
// import "./App.css";
// import List from "./components/list/List";

// function App() {
//   const [bgColor, setColor] = useState("white");

//   const handleDarkModeToggle = () => {
//     setColor(bgColor === "white" ? "black" : "white");
//   };

//   const buttonText = bgColor === "white" ? "ENABLE DARK Mode" : "ENABLE LIGHT Mode";

//   return (
//     <div className="App" style={{ backgroundColor: bgColor, color: bgColor === "white" ? "black" : "white" }}>
//       <List />
//       <div>
//         <button onClick={handleDarkModeToggle}>{buttonText}</button>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

const App = () => {
  const [newInput, setInput] = useState("");
const [submittedInputs, setSubmittedInputs] = useState([]);

   
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here if needed

    setSubmittedInputs([...submittedInputs, newInput])
    setInput("");
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
 
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="typo">Enter : </label>
          <input
            type="text"
            id="typo"
            onChange={onChangeHandler}
            value={newInput}
          />
        </div>

        <div>
          <button>Click</button>
        </div>
      </form>


      <div>
        <h2>Submitted Inputs:</h2>
       <ul>
        {submittedInputs.map((input, index)=>(
          <li key={index}>{input}</li>
        ))}
       </ul>
      </div>
    </div>
  );
};

export default App;


// import React, { useState } from "react";

// const App = () => {
//   const [newInput, setInput] = useState("");
//   const [submittedInputs, setSubmittedInputs] = useState([]);

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here if needed
//     setSubmittedInputs([...submittedInputs, newInput]); // Add the new input to the submittedInputs array
//     setInput(""); // Clear the input field after submission
//   };

//   const onChangeHandler = (e) => {
//     setInput(e.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmitHandler}>
//         <div>
//           <label htmlFor="typo">Enter : </label>
//           <input
//             type="text"
//             id="typo"
//             onChange={onChangeHandler}
//             value={newInput}
//           />
//         </div>

//         <div>
//           <button type="submit">Click</button>
//         </div>
//       </form>

//       <div>
//         <h2>Submitted Inputs:</h2>
//         <ul>
//           {submittedInputs.map((input, index) => (
//             <li key={index}>{input}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;