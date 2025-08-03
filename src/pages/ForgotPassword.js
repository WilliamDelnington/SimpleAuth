import React, { useState } from 'react'
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm'
import { useAuth } from '../controllers/hooks/useAuth'
import { Link } from 'react-router'

export default function ForgotPassword() {
    const { forgotPassword } = useAuth()
    const [successMessage, setSuccessMessage] = useState("")

    const handleSubmit = async ({ email }) => {
        const response = await forgotPassword({ email })
        if (response) {
            setSuccessMessage(response);
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
        <ForgotPasswordForm onSubmit={handleSubmit} successMessage={successMessage}/>
        <p style={{
            marginTop: "1rem",
            textAlign: "center"
        }}><Link to="/signin" style={{ color: "rgb(59, 130, 246)"}}>Back to Sign In</Link></p>
      </div>
    </div>
  )
}
