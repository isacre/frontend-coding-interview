import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicTemplate from "./templates/public";
import ProtectedTemplate from "./templates/protected";
import protectedRoutes from "./routes/protected";
import publicRoutes from "./routes/public";
import { AuthContextProvider } from "./contexts/AuthContext/AuthContextProvider";

function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PublicTemplate />}>
              {publicRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
            <Route path="/" element={<ProtectedTemplate />}>
              {protectedRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
