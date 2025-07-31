import { describe, expect, it } from "vitest";
import LikeButton from "./likeButton";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Like Button", () => {
  it("should be set to not liked by default", () => {
    render(<LikeButton />);
    expect(screen.getByTestId("not-liked-button")).toBeInTheDocument();
  });

  it("should change to liked when clicked and back to not liked when clicked again", () => {
    render(<LikeButton />);
    fireEvent.click(screen.getByTestId("not-liked-button"));
    expect(screen.getByTestId("liked-button")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("liked-button"));
    expect(screen.getByTestId("not-liked-button")).toBeInTheDocument();
  });
});
