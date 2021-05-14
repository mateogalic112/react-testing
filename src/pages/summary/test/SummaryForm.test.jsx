import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("checkbox is unchecked by default", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  const button = screen.getByRole("button", {
    name: "Confirm order",
  });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("checkbox is checked and then uchecked", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  const button = screen.getByRole("button", {
    name: "Confirm order",
  });

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});
