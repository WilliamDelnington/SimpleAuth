import React, { useContext, useState } from 'react'
import { useAuth } from '../controllers/hooks/useAuth'
import { AuthContext } from '../context/AuthContext'
import UpdateProfileForm from '../components/auth/UpdateProfileForm'
import { Link } from 'react-router'

export default function UpdateProfile() {
  const { updateProfile, error, loading } = useAuth()
  const [successMessage, setSuccessMessage] = useState("")
  const { user } = useContext(AuthContext)

  const handleSubmit = async ({ 
    email, 
    password,
    firstName,
    lastName,
    address,
    location,
    phoneNumber 
  }) => {
    const response = await updateProfile({
      userId: user.id,
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      location,
      password
     })
     if (response) {
        setSuccessMessage(response)
     }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Update Profile</h2>
        <UpdateProfileForm 
        onSubmit={handleSubmit}
        successMessage={successMessage}
        error={error}
        loading={loading}/>
        <p className="mt-4 text-center text-sm sm:text-base">
          <Link to="/" style={{ color: "rgb(59, 130, 246)"}}>Return to main page</Link>
        </p>
      </div>
    </div>
  )
}
