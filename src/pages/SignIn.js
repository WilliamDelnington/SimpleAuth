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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Sign In</h2>
        <SignInForm onSubmit={signIn} error={error} loading={loading}/>
        <p className="mt-4 text-center text-sm sm:text-base">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </p>
        <p className="mt-2 text-center text-sm sm:text-base">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn;