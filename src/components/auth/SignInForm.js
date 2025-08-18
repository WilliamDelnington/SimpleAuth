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
    const [emailPhoneNumber, setEmailPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        onSubmit({
          emailPhoneNumber: formData.get("emailPhoneNumber"),
          password: formData.get("password")
        })
    }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
        {error && <FormError message={error}></FormError>}
        <Input 
          type='text' 
          id="emailPhoneNumber" 
          name='emailPhoneNumber'
          className='authInput'
          placeholder='Email or Phone number'
          value={emailPhoneNumber}
          onChange={e => setEmailPhoneNumber(e.target.value)}/>
        <Input 
          type='password' 
          id="password" 
          name='password'
          className='authInput'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}/>
        <Input 
          type='text' 
          id="location" 
          name='location'
          className='authInput'
          placeholder='Location'
          value={location}
          onChange={e => setLocation(e.target.value)}/>
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