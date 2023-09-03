import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ExerciseProvider } from "./context/ExerciseContext.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import WorkoutsPage from "./pages/WorkoutsPage.jsx";
import ProgressPage from "./pages/ProgressPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import WorkoutCreatorPage from "./pages/WorkoutCreatorPage.jsx";
import WorkoutRecordPage from './pages/WorkoutRecordPage.jsx';
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import Profile from './pages/Profile.jsx';
import { WorkoutProvider } from "./context/WorkoutContext.jsx";

function App() {
  return (
    <AuthProvider>
      <ExerciseProvider>
        <WorkoutProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/workouts" element={<WorkoutsPage />} />
                <Route path="/create-workout" element={<WorkoutCreatorPage />} />
                <Route path="/workout-record" element={<WorkoutRecordPage />} />
                <Route path="/workout-record/:id" element={<WorkoutRecordPage />} />
                <Route path="/progress" element={<ProgressPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </WorkoutProvider>
      </ExerciseProvider>
    </AuthProvider>
  );
}

export default App;
