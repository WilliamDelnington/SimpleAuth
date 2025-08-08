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
    <form onSubmit={handleSubmit}>
        {error && <FormError message={error}></FormError>}
        {successMessage && <p style={{
            color: "#48bb78",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            textAlign: "center"
        }}>{successMessage}</p>}
        <div>
            <label 
            htmlFor='email'
            className='authField'>Enter your email:</label>
            <Input 
            type='text' 
            id="email" 
            name='email' 
            value={email}
            className='authInput'
            onChange={e => setEmail(e.target.value)}/>
        </div>
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