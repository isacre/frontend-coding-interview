import { useAuthContext } from "../../hooks/useAuthContext";

export const DummyConsumerComponentWithAuth = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();
  return (
    <div data-testid="auth-status">
      <p>{isAuthenticated ? "Authenticated" : "Not Authenticated"}</p>
      <button
        data-testid="authenticate-button"
        onClick={() => setIsAuthenticated(true)}
      />
    </div>
  );
};
