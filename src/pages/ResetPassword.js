import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import ResetPasswordForm from '../components/auth/ResetPasswordForm'
import { useAuth } from '../controllers/hooks/useAuth'

export default function ResetPassword() {
    const location = useLocation()
    const [token, setToken] = useState("")
    const [uid, setUid] = useState("")
    const { resetPassword, error, loading } = useAuth()
    const [successMessage, setSuccessMessage] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        setToken(queryParams.get('token'));
        setUid(queryParams.get("uid"))
    }, [location]);

    const handleSubmit = async ({ newPassword }) => {
        const response = await resetPassword({
            token,
            uid,
            newPassword
        })
        if (response) {
            setSuccessMessage("Password reset successfully. You can now sign in with your new password.")
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Reset Password</h2>
        <ResetPasswordForm 
        onSubmit={handleSubmit}
        successMessage={successMessage}
        error={error}
        loading={loading}/>
      </div>
    </div>
  )
}
