import { useState } from 'react'
import Button from '../common/Button'
import FormError from '../common/FormError'
import Input from '../common/Input'

export default function SignUpForm({ onSubmit }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const formData = new FormData(e.target)
        try {
          setError("")
          onSubmit({
            name: formData.get("name"),
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
        <label htmlFor='name'>Name:</label>
        <Input 
        type='text'
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}/>
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
        <label htmlFor='confirm-password'>Confirm Password:</label>
        <Input 
        type='password'
        id="confirm-password"
        name="confirm-password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}/>
        <Button 
        type='submit'
        disabled={loading}>Sign Up</Button>
    </form>
  )
}
