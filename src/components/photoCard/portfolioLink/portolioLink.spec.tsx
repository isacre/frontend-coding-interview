import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PortfolioLink from "./portfolioLink";

describe("Portfolio Link", () => {
  it("should render with the correct link and text", () => {
    render(<PortfolioLink link="https://www.google.com" text="Portfolio" />);
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://www.google.com"
    );
  });
  it("should open the link in a new tab", () => {
    render(<PortfolioLink link="https://www.google.com" text="Portfolio" />);
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });
});
