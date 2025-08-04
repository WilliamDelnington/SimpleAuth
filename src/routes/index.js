import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom"
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import UpdatePassword from "../pages/UpdatePassword";
import Dashboard from "../pages/Dashboard";

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/signin" />;
}

export default function AppRoutes() {
    return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/update-profile"
        element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>}
      />
      <Route
        path="/dashboard"
        element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
      />
      <Route path="/" element={<Navigate to="/signin" />} />
    </Routes>
  );
} 