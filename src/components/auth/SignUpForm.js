import { useState } from 'react'
import Button from '../common/Button'
import FormError from '../common/FormError'
import Input from '../common/Input'
import PropTypes from 'prop-types'

function SignUpForm({ 
  onSubmit, 
  error, 
  loading 
}) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [location, setLocation] = useState("")
    // const [error, setError] = useState("")
    // const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        onSubmit({
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            password: formData.get("password"),
            address: formData.get("address"),
            phoneNumber: formData.get("phoneNumber"),
            location: formData.get("location")
        })
    }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
        {error && <FormError message={error} />}
        <Input 
          type='text'
          id="firstName"
          name="firstName"
          className='authInput'
          placeholder='First Name'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}/>
        <Input 
          type='text'
          id="lastName"
          name="lastName"
          className='authInput'
          placeholder='Last Name'
          value={lastName}
          onChange={e => setLastName(e.target.value)}/>
        <Input 
          type='text' 
          id="email" 
          name='email'
          className='authInput' 
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}/>
        <Input 
          type='text' 
          id="phoneNumber" 
          name='phoneNumber' 
          className='authInput'
          placeholder='Phone Number'
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}/>
        <Input 
          type='text' 
          id="address" 
          name='address' 
          className='authInput'
          placeholder='Address'
          value={address}
          onChange={e => setAddress(e.target.value)}/>
        <Input 
          type='text' 
          id="location" 
          name='location' 
          className='authInput'
          placeholder='Location'
          value={location}
          onChange={e => setLocation(e.target.value)}/>
        <Input 
          type='password' 
          id="password" 
          name='password'
          className='authInput'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}/>
        <Input 
          type='password'
          id="confirm-password"
          name="confirm-password"
          className='authInput'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}/>
        <Button 
        type='submit'
        disabled={loading}>Sign Up</Button>
    </form>
  )
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool
}

export default SignUpForm;