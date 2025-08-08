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
        console.log({
          firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            password: formData.get("password"),
            address: formData.get("address"),
            phoneNumber: formData.get("phoneNumber"),
            location: formData.get("location")
        })
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
    <form onSubmit={handleSubmit}>
        {error && <FormError message={error} />}
        <div>
          <label 
          htmlFor='firstName'
          className='authField'>First Name:</label>
          <Input 
          type='text'
          id="firstName"
          name="firstName"
          className='authInput'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}/>
        </div>
        <div>
          <label 
          htmlFor='last-name'
          className='authField'>Last Name:</label>
          <Input 
          type='text'
          id="lastName"
          name="lastName"
          className='authInput'
          value={lastName}
          onChange={e => setLastName(e.target.value)}/>
        </div>
        <div>
          <label 
          htmlFor='email'
          className='authField'>Email:</label>
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
          htmlFor='phoneNumber'
          className='authField'>Phone Number:</label>
          <Input 
          type='text' 
          id="phoneNumber" 
          name='phoneNumber' 
          className='authInput'
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}/>
        </div>
        <div>
          <label 
          htmlFor='address'
          className='authField'>Address:</label>
          <Input 
          type='text' 
          id="address" 
          name='address' 
          className='authInput'
          value={address}
          onChange={e => setAddress(e.target.value)}/>
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
          htmlFor='confirm-password'
          className='authField'>Confirm Password:</label>
          <Input 
          type='password'
          id="confirm-password"
          name="confirm-password"
          className='authInput'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}/>
        </div>
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