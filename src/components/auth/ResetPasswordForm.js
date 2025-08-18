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
    <form onSubmit={handleSubmit} className="space-y-4">
        {error && <FormError message={error}></FormError>}
        {localError && <FormError message={localError}></FormError>}
        {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}
        <Input 
            type='password' 
            id="new-password" 
            name='new-password'
            className='authInput'
            placeholder='New Password'
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)} />
        <Input 
            type='password'
            id="confirm-new-password"
            name="confirm-new-password"
            className='authInput'
            placeholder='Confirm New Password'
            value={confirmNewPassword}
            onChange={e => setConfirmNewPassword(e.target.value)} />
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