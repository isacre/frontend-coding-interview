import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { PublicRouteWithRouterAndProvider } from "../../__tests__/utils/publicRouteWithRouterAndProvider";
import SignInPage from ".";
import { Route } from "react-router-dom";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

describe("Sign In Page", () => {
  beforeEach(() => {
    render(
      <PublicRouteWithRouterAndProvider initialEntries={["/"]}>
        <Route path="/" element={<SignInPage />} />
      </PublicRouteWithRouterAndProvider>
    );
  });

  it("should render the sign in page", () => {
    expect(screen.getByText("Sign in to your account")).toBeInTheDocument();
  });

  it("should redirect to /all-photos on successful sign in", async () => {
    localStorage.clear();
    localStorage.setItem(
      "user",
      JSON.stringify({ email: "validemail@gmail.com", password: "12345678" })
    );
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "validemail@gmail.com" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "12345678" },
    });
    fireEvent.click(screen.getByTestId("sign-in-button"));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/all-photos");
    });
  });

  it("should show an error message if the sign in fails", async () => {
    localStorage.clear();
    localStorage.setItem(
      "user",
      JSON.stringify({ email: "validemail@gmail.com", password: "12345678" })
    );
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "invalidemail@gmail.com" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "12345678" },
    });
    fireEvent.click(screen.getByTestId("sign-in-button"));

    await waitFor(() => {
      expect(alertMock).toBeCalledWith("Invalid credentials");
    });
  });

  it("should save user to local storage, display an alert and redirect to /all-photos if it doesn't exist", async () => {
    localStorage.clear();
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "validemail@gmail.com" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "12345678" },
    });
    fireEvent.click(screen.getByTestId("sign-in-button"));

    await waitFor(() => {
      expect(alertMock).toBeCalledWith(
        "New account detected, your user has been saved to our database"
      );
    });

    await waitFor(() => {
      expect(localStorage.getItem("user")).toEqual(
        JSON.stringify({
          email: "validemail@gmail.com",
          password: "12345678",
        })
      );
    });

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/all-photos");
    });
  });

  it("should delete user from local storage if Forgot Password is clicked", async () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: "validemail@gmail.com", password: "12345678" })
    );
    fireEvent.click(screen.getByTestId("forgot-password-button"));

    await waitFor(() => {
      expect(localStorage.getItem("user")).toBeNull();
    });

    await waitFor(() => {
      expect(alertMock).toBeCalledWith(
        "We refreshed our database, please sign in again"
      );
    });
  });
});
