import React from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = React.useState("red");
  const buttonColorText = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(buttonColorText)}
      >{`Change to ${buttonColorText}`}</button>
    </div>
  );
}

export default App;
