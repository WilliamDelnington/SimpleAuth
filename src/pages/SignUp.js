import React, { useContext, useEffect } from 'react'
import { useAuth } from '../controllers/hooks/useAuth'
import SignUpForm from '../components/auth/SignUpForm'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

export default function SignUp() {
  const { signUp, error, loading } = useAuth()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <SignUpForm onSubmit={signUp} error={error} loading={loading}/>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/signin" className="text-blue-500">Sign In</Link>
        </p>
      </div>
    </div>
  )
}
