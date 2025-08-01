import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect } from "react";
import { Wrapper } from "./styles";

export default function ProtectedTemplate() {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? (
    <Wrapper data-testid="protected-page">
      <Outlet />
    </Wrapper>
  ) : null;
}
