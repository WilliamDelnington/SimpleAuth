import { useContext, useEffect } from 'react'
import SignInForm from '../components/auth/SignInForm'
import { useAuth } from '../controllers/hooks/useAuth'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

function SignIn() {
  const { signIn, error, loading } = useAuth()
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
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <SignInForm onSubmit={signIn} error={error} loading={loading}/>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
        </p>
        <p className="mt-2 text-center">
          <Link to="/forgot-password" className="text-blue-500">Forgot Password?</Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn;