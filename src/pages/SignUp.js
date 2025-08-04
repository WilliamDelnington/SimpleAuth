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
        }}>Sign Up</h2>
        <SignUpForm onSubmit={signUp} error={error} loading={loading}/>
        <p style={{
          marginTop: '1rem',
          textAlign: 'center'
        }}>Already have an account? <Link to="/signin" style={{color: "rgb(59, 130, 246)"}}>Sign In</Link></p>
      </div>
    </div>
  )
}
