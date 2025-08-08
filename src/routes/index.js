import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom"
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import UpdatePassword from "../pages/UpdatePassword";
import Dashboard from "../pages/Dashboard";
import ResetPassword from "../pages/ResetPassword";
import UpdateProfile from "../pages/UpdateProfile";

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
      <Route path="/reset-password" element={<ResetPassword />}/>
      <Route
        path="/update-password"
        element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>}
      />
      <Route
        path="/"
        element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
      />
      <Route
      path="/update-profile"
      element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>}/>
    </Routes>
  );
} 