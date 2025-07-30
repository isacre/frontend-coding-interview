import { Outlet, useNavigate } from "react-router";
import { useAuthContext } from "../../utils/context/AuthContext/useAuthContext";
import { useEffect } from "react";

export default function ProtectedTemplate() {
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated);

    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate, setIsAuthenticated]);

  return isAuthenticated ? <Outlet /> : null;
}
