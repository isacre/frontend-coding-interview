import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import NameAndDescription from "./details";

describe("Photo Card Details", () => {
  it("renders the correct name, description, color and color preview", () => {
    render(
      <NameAndDescription
        name="My Image"
        alt="A scenic view"
        avg_color="#ccc"
      />
    );
    expect(screen.getByText("My Image")).toBeInTheDocument();
    expect(screen.getByText("A scenic view")).toBeInTheDocument();
    expect(screen.getByText("#ccc")).toBeInTheDocument();
    expect(screen.getByTestId("color-preview")).toHaveStyle(
      "background-color: #ccc;"
    );
  });
});
