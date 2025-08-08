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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Password</h2>
        <UpdatePasswordForm 
        onSubmit={handleSubmit} 
        successMessage={successMessage}
        error={error}
        loading={loading}/>
      </div>
    </div>
  )
}
