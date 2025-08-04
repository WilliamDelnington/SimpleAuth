import React, { useContext, useEffect } from 'react'
import SignInForm from '../components/auth/SignInForm'
import { useAuth } from '../controllers/hooks/useAuth'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

export default function SignIn() {
  const { signIn, error, loading } = useAuth()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F3F4F6', // Tailwind's gray-100
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '0.25rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Tailwind's shadow-md
        width: '100%',
        maxWidth: '28rem',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}>Sign In</h2>
        <SignInForm onSubmit={signIn} error={error} loading={loading}/>
        <p style={{
          marginTop: '1rem',
          textAlign: 'center'
        }}>Don't have an account? <Link to="/signup" style={{color: "rgb(59, 130, 246)"}}>Sign Up</Link></p>
        <p style={{
          marginTop: '0.5rem',
          textAlign: 'center'}}>
          <Link to="/forgot-password" style={{color: "rgb(59, 130, 246)"}}>Forgot Password?</Link>
        </p>
      </div>
    </div>
  )
}