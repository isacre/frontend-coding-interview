import { createContext } from "react";
import { type SetStateAction } from "../../../types/user";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: SetStateAction<boolean>;
}
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});
