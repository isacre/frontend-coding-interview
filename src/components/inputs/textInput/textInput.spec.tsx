import { render, screen } from "@testing-library/react";
import TextInput from "./textInput";
import { describe, it, expect, beforeEach } from "vitest";

describe("TextInput", () => {
  beforeEach(() => {
    render(
      <TextInput
        title="Test"
        type="text"
        id="test"
        actionComponent={<button data-testid="action-button">Test</button>}
      />
    );
  });
  it("should render the action button if actionComponent is provided", () => {
    expect(screen.getByTestId("action-button")).toBeInTheDocument();
  });

  it("should render the label with the correct text", () => {
    expect(screen.getByTestId("label")).toHaveTextContent("Test");
  });

  it("should render the input with the correct type", () => {
    expect(screen.getByTestId("input-field")).toHaveAttribute("type", "text");
  });
});
