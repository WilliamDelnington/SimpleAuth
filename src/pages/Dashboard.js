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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Welcome, {user?.first_name + user?.last_name || 'User'}!</h2>
            <div className="space-y-4">
                <p className="text-gray-700">
                    <strong>Email:</strong> {user?.email || 'N/A'}
                </p>
                <div className="flex flex-col space-y-2">
                    <Link
                    to="/update-profile"
                    className='text-blue-500 hover:underline text-center'>Update Profile</Link>
                    <Link
                    to="/update-password"
                    className='text-blue-500 hover:underline text-center'>Update Password</Link>
                </div>
                <Button onClick={handleSignout}>Sign Out</Button>
            </div>
        </div>
    </div>
  )
}