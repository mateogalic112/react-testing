import React from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

const Button = () => {
  const [buttonColor, setButtonColor] = React.useState("MediumVioletRed");
  const [checked, setChecked] = React.useState(false);
  const buttonColorText =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        style={{ backgroundColor: !checked ? buttonColor : "gray" }}
        onClick={() => setButtonColor(buttonColorText)}
        disabled={checked}
      >
        {`Change to ${replaceCamelWithSpaces(buttonColorText)}`}
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
};

export default Button;
