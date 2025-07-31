import { render, screen } from "@testing-library/react";
import { Route } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { ProtectedTemplateWithRouterAndProvider } from "../../__tests__/utils/protectedRouteWithRouterAndProvider";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Protected Template", () => {
  render(
    <ProtectedTemplateWithRouterAndProvider
      initialEntries={["/protected/test"]}
    >
      <Route path="test" element={<div>Protected Content</div>} />
    </ProtectedTemplateWithRouterAndProvider>
  );
  it("should not render the protected page content if user is not authenticated", () => {
    expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
  });

  it("should call redirect to /", () => {
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
