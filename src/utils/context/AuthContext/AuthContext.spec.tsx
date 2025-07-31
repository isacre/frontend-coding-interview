import { describe, it, expect, beforeEach } from "vitest";
import { useAuthContext } from "./useAuthContext";
import { AuthContextProvider } from "./AuthContextProvider";
import { render, screen, fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import { DummyConsumerComponentWithAuth } from "../../../__tests__/utils/dummyComponentWithAuth";

describe("AuthContext without provider", () => {
  it("must throw an error if used outside AuthContextProvider (not message specific)", () => {
    expect(() => renderHook(() => useAuthContext())).toThrow();
  });
});

describe("AuthContext with provider", () => {
  beforeEach(() => {
    render(
      <AuthContextProvider>
        <DummyConsumerComponentWithAuth />
      </AuthContextProvider>
    );
  });

  it("should provide default isAuthenticated as false", () => {
    expect(screen.getByTestId("auth-status").textContent).toBe(
      "Not Authenticated"
    );
  });

  it("should set isAuthenticated to true when authenticate button is clicked", () => {
    fireEvent.click(screen.getByTestId("authenticate-button"));
    expect(screen.getByTestId("auth-status").textContent).toBe("Authenticated");
  });
});
