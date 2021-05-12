import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to blue" });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checking and unchecking checkbox", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("button is first disabled then enabled", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });
  expect(button.textContent).toBe("Change to blue");

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button.textContent).toBe("Change to blue");
  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("click button, than disable it, then enable it", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(button);
  expect(button.textContent).toBe("Change to red");
  expect(button).toHaveStyle({ backgroundColor: "blue" });

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(button.textContent).toBe("Change to red");
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});

describe("spaces before camel case capital letters", () => {
  test("Work for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRedGreen")).toBe(
      "Medium Violet Red Green"
    );
  });
});
