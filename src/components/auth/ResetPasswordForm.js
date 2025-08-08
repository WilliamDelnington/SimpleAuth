import React, { useState } from 'react'
import FormError from '../common/FormError'
import Input from '../common/Input'
import Button from '../common/Button'
import PropTypes from 'prop-types'

function ResetPasswordForm({ 
    onSubmit, 
    successMessage, 
    error, 
    loading 
}) {
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [localError, setLocalError] = useState("")

    const handleSubmit = async (e) => {
        setLocalError("")
        e.preventDefault()
        if (newPassword !== confirmNewPassword) {
            setLocalError("Passwords do not match.")
            return
        }
        const formData = new FormData(e.target)
        onSubmit({
            newPassword: formData.get("new-password")
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
        disabled={loading}>{loading ? 'Resetting...' : 'Reset Password'}</Button>
    </form>
  )
}

ResetPasswordForm.propTypes = {
    onSubmit: PropTypes.func,
    successMessage: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool
}

export default ResetPasswordForm;