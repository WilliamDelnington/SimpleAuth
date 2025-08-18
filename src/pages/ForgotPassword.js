import React, { useState } from 'react'
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm'
import { useAuth } from '../controllers/hooks/useAuth'
import { Link } from 'react-router'

export default function ForgotPassword() {
    const { forgotPassword, error, loading } = useAuth()
    const [successMessage, setSuccessMessage] = useState("")

    const handleSubmit = async ({ email }) => {
        const response = await forgotPassword({ email })
        if (response) {
            setSuccessMessage(response);
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Reset Password</h2>
        <ForgotPasswordForm 
        onSubmit={handleSubmit} 
        successMessage={successMessage}
        error={error}
        loading={loading}/>
        <p className="mt-4 text-center"><Link to="/signin" className="text-blue-500 hover:underline">Back to Sign In</Link></p>
      </div>
    </div>
  )
}
