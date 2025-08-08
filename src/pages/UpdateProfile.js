import React, { useContext, useState } from 'react'
import { useAuth } from '../controllers/hooks/useAuth'
import { AuthContext } from '../context/AuthContext'
import UpdateProfileForm from '../components/auth/UpdateProfileForm'
import { Link } from 'react-router'

export default function UpdateProfile() {
  const { updateProfile, error, loading } = useAuth()
  const [successMessage, setSuccessMessage] = useState("")
  const { user } = useContext(AuthContext)

  const handleSubmit = async ({ email, name, password }) => {
    const response = await updateProfile({
      userId: user.id,
      name: name,
      email: email,
      password: password
     })
     if (response) {
        setSuccessMessage(response)
     }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
        <UpdateProfileForm 
        onSubmit={handleSubmit}
        successMessage={successMessage}
        error={error}
        loading={loading}/>
        <p style={{
            marginTop: "1rem",
            textAlign: "center"
        }}><Link to="/" style={{ color: "rgb(59, 130, 246)"}}>Return to main page</Link></p>
      </div>
    </div>
  )
}
