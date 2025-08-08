import React, { useState } from 'react'
import Input from '../common/Input'
import FormError from '../common/FormError'
import Button from '../common/Button'
import PropTypes from 'prop-types'

function UpdatePasswordForm({ 
    onSubmit, 
    error, 
    loading, 
    successMessage 
}) {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [localError, setLocalError] = useState("")
    // const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        setLocalError("")
        e.preventDefault()
        if (newPassword !== confirmNewPassword) {
            setLocalError("Paswords do not match.")
            return
        }
        const formData = new FormData(e.target)
        onSubmit({
            currentPassword: formData.get('current-password'),
            newPassword: formData.get('new-password'),
        })
        setLocalError("")
    }

  return (
    <form onSubmit={handleSubmit}>
        {error && <FormError message={error}></FormError>}
        {localError && <FormError message={localError}></FormError>}
        {successMessage && <p style={{
            color: "#48bb78",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            textAlign: "center"
        }}>{successMessage}</p>}
        <div>
            <label 
            htmlFor='current-password'
            className='authField'>Current Password:</label>
            <Input 
            type='password'
            id="current-password"
            name="current-password"
            className='authInput'
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)} />
        </div>
        <div>
            <label 
            htmlFor='new-password'
            className='authField'>New Password:</label>
            <Input 
            type='password' 
            id="new-password" 
            name='new-password'
            className='authInput'
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)} />
        </div>
        <div>
            <label 
            htmlFor='confirm-new-password'
            className='authField'>Confirm New Password:</label>
            <Input 
            type='password'
            id="confirm-new-password"
            name="confirm-new-password"
            className='authInput'
            value={confirmNewPassword}
            onChange={e => setConfirmNewPassword(e.target.value)} />
        </div>
        <Button 
        type='submit'
        disabled={loading}>{loading ? 'Updating...' : 'Update Password'}</Button>
    </form>
  )
}

UpdatePasswordForm.propTypes = {
    onSubmit: PropTypes.func,
    successMessage: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool
}

export default UpdatePasswordForm