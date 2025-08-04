import { useState } from 'react'
import Button from '../common/Button'
import FormError from '../common/FormError'
import Input from '../common/Input'

export default function SignUpForm({ onSubmit, error, loading }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    // const [error, setError] = useState("")
    // const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        onSubmit({
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password")
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        {error && <FormError message={error} />}
        <div>
          <label htmlFor='name'>Name:</label>
          <Input 
          type='text'
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}/>
        </div>
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
        <div>
          <label htmlFor='confirm-password'>Confirm Password:</label>
          <Input 
          type='password'
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}/>
        </div>
        <Button 
        type='submit'
        disabled={loading}>Sign Up</Button>
    </form>
  )
}
