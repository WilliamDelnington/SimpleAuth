import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useAuth } from '../controllers/hooks/useAuth'
import { Link, useNavigate } from 'react-router'
import Button from '../components/common/Button'

export default function Dashboard() {
    const { user } = useContext(AuthContext)
    const { signOut } = useAuth()
    const navigate = useNavigate()

    const handleSignout = () => {
        signOut();
        navigate('/signin');
    }

  return (
    <div style={{
        minHeight: "100vh",              /* min-h-screen */
        display: "flex",                  /* flex */
        alignItems: "center",          /* items-center */
        justifyContent: "center",       /* justify-center */
        backgroundColor: "#f3f4f6"      /* bg-gray-100 */
    }}>
        <div style={{
            backgroundColor: "#ffffff",     /* bg-white */
            padding: "2rem",                 /* p-8 (8 × 0.25rem = 2rem) */
            borderRadius: "0.375rem",       /* rounded (default = 6px or 0.375rem) */
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)", /* shadow-md */
            width: "100%",                   /* w-full */
            maxWidth: "28rem"              /* max-w-md (md = 448px = 28rem) */
        }}>
            <h2 style={{
                fontSize: "1.5rem",             /* text-2xl */
                fontWeight: 700,              /* font-bold */
                marginBottom: "1.5rem",         /* mb-6 (6 × 0.25rem = 1.5rem) */
                textAlign: "center" 
            }}>Welcome, {user?.name || 'User'}!</h2>
            <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem'
            }}>
                <p style={{color: "#374151"}}>
                    <strong>Email:</strong> {user?.email || 'N/A'}
                </p>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.5rem'
                }}>
                    <Link
                    to="/update-profile"
                    style={{
                        color: "#3b82f6",           /* text-blue-500 */
                        textAlign: "center" 
                    }}>Update Profile</Link>
                    <Link
                    to="/update-password"
                    style={{
                        color: "#3b82f6",           /* text-blue-500 */
                        textAlign: "center" 
                    }}>Update Password</Link>
                </div>
                <Button onClick={handleSignout}>Sign Out</Button>
            </div>
        </div>
    </div>
  )
}