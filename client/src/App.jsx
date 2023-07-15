import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage.jsx';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1 className="">Home page</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/sets" element={<h1>Sets</h1>} />
          <Route path="/progress" element={<h1>Progress</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
