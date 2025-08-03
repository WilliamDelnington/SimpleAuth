import React, { useState } from 'react'
import Input from '../common/Input'

export default function UpdatePasswordForm({ onSubmit, successMessage }) {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        if (newPassword !== confirmNewPassword) {
            setError("Passwords do not match.")
            setLoading(false)
            return
        }
        const formData = new FormData(e.target)
        try {
            setError("")
            onSubmit({
                currentPassword: formData.get('currentPassword'),
                newPassword: formData.get('newPassword'),
            })
        } catch (err) {
            setError(err.message)
        }
        setLoading(false)
    }

  return (
    <form onSubmit={handleSubmit}>
        {error && <FormError message={error} />}
        (successMessage && <p style={{
            color: "#48bb78",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            textAlign: "center"
        }}>{successMessage}</p>)
        <label htmlFor='current-password'>Current Password:</label>
        <Input 
        type='password'
        id="current-password"
        name="current-password"
        value={currentPassword}
        onChange={e => setCurrentPassword(e.target.value)} />
        <label htmlFor='new-password'>New Password:</label>
        <Input 
        type='password' 
        id="new-password" 
        name='new-password'
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)} />
        <label htmlFor='confirm-new-password'>Confirm New Password:</label>
        <Input 
        type='password'
        id="confirm-new-password"
        name="confirm-new-password"
        value={confirmNewPassword}
        onChange={e => setConfirmNewPassword(e.target.value)} />
        <Button 
        type='submit'
        disabled={loading}>{loading ? 'Updating...' : 'Update Password'}</Button>
    </form>
  )
}
