import React from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = React.useState("red");
  const [checked, setChecked] = React.useState(false);
  const buttonColorText = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: !checked ? buttonColor : "gray" }}
        onClick={() => setButtonColor(buttonColorText)}
        disabled={checked}
      >
        {`Change to ${buttonColorText}`}
      </button>

      <input
        type="checkbox"
        id="disable-button-checkbox"
        aria-checked={checked}
        value={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
