import { describe, expect, it } from "vitest";
import AllPhotosPage from ".";
import { render, screen } from "@testing-library/react";

describe("All Photos Page", () => {
  it("should render the page", () => {
    render(<AllPhotosPage />);
    expect(screen.getByTestId("logo-and-title")).toBeInTheDocument();
  });
});
