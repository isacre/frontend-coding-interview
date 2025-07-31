import { describe, expect, it } from "vitest";
import Photo from "./photo";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Photo", () => {
  it("should render a loading spinner on the first render", () => {
    render(<Photo alt="test" url=" " />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("should not render the loading spinner if the image loads", () => {
    render(<Photo alt="test" url=" " />);
    fireEvent.load(screen.getByRole("img"));
    expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
  });

  it("should render an error icon if the image fails to load", () => {
    render(<Photo alt="test" url="http://localhost/404-image.jpg" />);
    fireEvent.error(screen.getByRole("img"));
    expect(screen.getByTestId("error-icon")).toBeInTheDocument();
  });
});
