import { useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'
import FormError from '../common/FormError'
import PropTypes from 'prop-types'

function SignInForm({ 
  onSubmit, 
  error, 
  loading 
}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")

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
          <label 
          htmlFor='email'
          className="authField">Email:</label>
          <Input 
          type='text' 
          id="email" 
          name='email'
          className='authInput'
          value={email}
          onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <label 
          htmlFor='password'
          className='authField'>Password:</label>
          <Input 
          type='password' 
          id="password" 
          name='password'
          className='authInput'
          value={password}
          onChange={e => setPassword(e.target.value)}/>
        </div>
        <div>
          <label 
          htmlFor='location'
          className='authField'>Location:</label>
          <Input 
          type='text' 
          id="location" 
          name='location'
          className='authInput'
          value={location}
          onChange={e => setLocation(e.target.value)}/>
        </div>
        <Button 
        type='submit'
        disabled={loading}>Sign In</Button>
    </form>
  )
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool
}

export default SignInForm