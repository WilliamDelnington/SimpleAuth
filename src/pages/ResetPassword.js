import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import ResetPasswordForm from '../components/auth/ResetPasswordForm'
import { useAuth } from '../controllers/hooks/useAuth'

export default function ResetPassword() {
    const location = useLocation()
    const [token, setToken] = useState("")
    const { resetPassword, error, loading } = useAuth()
    const [successMessage, setSuccessMessage] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const t = queryParams.get('token');
        setToken(t);
    }, [location]);

    const handleSubmit = async ({ newPassword }) => {
        const response = await resetPassword({
            token,
            newPassword
        })
        console.log(newPassword)
        if (response) {
            setSuccessMessage("Password reset successfully. You can now sign in with your new password.")
        }
    }

  return (
    <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f6"
    }}>
      <div style={{
        backgroundColor: "#ffffff",
        padding: "2rem",
        borderRadius: "0.25rem",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
        maxWidth: "28rem"
      }}>
        <h2 style={{
            fontSize: "1.5rem",
            lineHeight: "2rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            textAlign: "center"
        }}>Reset Password</h2>
        <ResetPasswordForm 
        onSubmit={handleSubmit}
        successMessage={successMessage}
        error={error}
        loading={loading}/>
        </div>
    </div>
  )
}
