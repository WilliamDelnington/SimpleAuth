import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useAuth } from '../controllers/hooks/useAuth'
import { useNavigate } from 'react-router'
import UpdatePasswordForm from '../components/auth/UpdatePasswordForm'

export default function UpdatePassword() {
    const { user } = useContext(AuthContext)
    const { updatePassword, error, loading } = useAuth()
    const [successMessage, setSuccessMessage] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async ({ currentPassword, newPassword }) => {
        const response = await updatePassword({
            userId: user.id,
            currentPassword,
            newPassword
        })
        if (response) {
            setSuccessMessage("Password updated successfully.")
            setTimeout(() => navigate('/'), 2500);
        }
    }

    useEffect(() => {
        if (!user) {
            navigate('/signin'); 
        }
    }, [user, navigate])

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
        }}>Update Password</h2>
        <UpdatePasswordForm 
        onSubmit={handleSubmit} 
        successMessage={successMessage}
        error={error}
        loading={loading}
        />
      </div>
    </div>
  )
}
