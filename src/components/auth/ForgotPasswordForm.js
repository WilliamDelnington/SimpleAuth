import React, { useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'
import FormError from '../common/FormError'
import PropTypes from 'prop-types'

function ForgotPasswordForm({ 
    onSubmit, 
    successMessage, 
    error, 
    loading }) {
    const [email, setEmail] = useState("")
    // const [error, setError] = useState("")
    // const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        onSubmit({
            email: formData.get("email")
        })
    }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
        {error && <FormError message={error}></FormError>}
        {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}
         <Input 
            type='text' 
            id="email" 
            name='email' 
            value={email}
            placeholder='Enter your email'
            className='authInput'
            onChange={e => setEmail(e.target.value)}/>
        <Button 
        type='submit'
        disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
        </Button>
    </form>
  )
}

ForgotPasswordForm.propTypes = {
    onSubmit: PropTypes.func,
    successMessage: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool
}

export default ForgotPasswordForm