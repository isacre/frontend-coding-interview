import { createContext } from "react";
import { type SetStateAction } from "../../types";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: SetStateAction<boolean>;
}
export const AuthContext = createContext<AuthContextType | null>(null);
