import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from "./pages/LoginPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1 className="">Home page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/sets" element={<h1>Sets</h1>} />
          <Route path="/progress" element={<h1>Progress</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
