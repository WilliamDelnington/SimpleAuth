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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        <ResetPasswordForm 
        onSubmit={handleSubmit}
        successMessage={successMessage}
        error={error}
        loading={loading}/>
      </div>
    </div>
  )
}
