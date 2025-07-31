import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../../utils/context/AuthContext/AuthContextProvider";
import ProtectedTemplate from "../../templates/protected";

export function ProtectedTemplateWithRouterAndProvider({
  initialEntries,
  children,
}: {
  initialEntries: string[];
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/protected" element={<ProtectedTemplate />}>
            {children}
          </Route>
        </Routes>
      </MemoryRouter>
    </AuthContextProvider>
  );
}
