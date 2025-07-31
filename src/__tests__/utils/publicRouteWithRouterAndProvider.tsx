import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../../utils/context/AuthContext/AuthContextProvider";
import PublicTemplate from "../../templates/public";

export function PublicRouteWithRouterAndProvider({
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
          <Route path="/" element={<PublicTemplate />}>
            {children}
          </Route>
        </Routes>
      </MemoryRouter>
    </AuthContextProvider>
  );
}
