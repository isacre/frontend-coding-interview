import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import LogoAndTitle from "./logoAndTitle";

describe("LogoAndTitle", () => {
  it("should render the logo and title with the correct styles applyed to img, h1 and wrapper", () => {
    render(
      <LogoAndTitle
        title="Clever Real State"
        alignItems="flex-start"
        size="75px"
      />
    );
    expect(screen.getByRole("heading")).toHaveTextContent("Clever Real State");
    expect(screen.getByRole("img")).toHaveStyle("height: 75px; width: 75px;");
    expect(screen.getByTestId("logo-and-title")).toHaveStyle(
      "align-items: flex-start;"
    );
  });
});
