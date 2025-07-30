import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import AllPhotosPage from "./pages/AllPhotos";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/all-photos" element={<AllPhotosPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
