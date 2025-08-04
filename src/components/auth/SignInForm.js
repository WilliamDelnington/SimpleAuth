import React, { useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'
import FormError from '../common/FormError'

export default function SignInForm({ onSubmit, error, loading }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        onSubmit({
          email: formData.get("email"),
          password: formData.get("password")
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        {error && <FormError message={error}></FormError>}
        <div>
          <label htmlFor='email'>Email:</label>
          <Input 
          type='text' 
          id="email" 
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <Input 
          type='password' 
          id="password" 
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}/>
        </div>
        <Button 
        type='submit'
        disabled={loading}>Sign In</Button>
    </form>
  )
}