import React, { useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'
import FormError from '../common/FormError'

export default function SignInForm({ onSubmit }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const formData = new FormData(e.target);
        try {
          setError("")
          onSubmit({
          email: formData.get("email"),
          password: formData.get("password")
        })
        } catch (err) {
          setError(err.message)
        }
        setLoading(false)
    }

  return (
    <form onSubmit={handleSubmit}>
        (error && <FormError message={error} />)
        <label htmlFor='email'>Email:</label>
        <Input 
        type='text' 
        id="email" 
        name='email'
        value={email}
        onChange={e => setEmail(e.target.value)}/>
        <label htmlFor='password'>Password:</label>
        <Input 
        type='password' 
        id="password" 
        name='password'
        value={password}
        onChange={e => setPassword(e.target.value)}/>
        <Button 
        type='submit'
        disabled={loading}>Sign In</Button>
    </form>
  )
}