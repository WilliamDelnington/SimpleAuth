import React from 'react'
import { useAuth } from '../controllers/hooks/useAuth'
import SignUpForm from '../components/auth/SignUpForm'
import { Link } from 'react-router'

export default function SignUp() {
  const { signUp } = useAuth()

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
        <SignUpForm onSubmit={signUp}/>
        <p style={{
          marginTop: '1rem',
          textAlign: 'center'
        }}>Already have an account? <Link to="/signin" style={{color: rgb(59, 130, 246)}}>Sign In</Link></p>
      </div>
    </div>
  )
}
