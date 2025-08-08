import React, { useContext, useState } from 'react'
import FormError from '../common/FormError'
import { AuthContext } from '../../context/AuthContext'
import Input from '../common/Input'
import Button from '../common/Button'
import PropTypes from 'prop-types'

function UpdateProfileForm({ 
    onSubmit, 
    successMessage,
    error, 
    loading 
}) {
    const { user } = useContext(AuthContext)
    const [firstName, setFirstName] = useState(user?.first_name || "")
    const [lastName, setLastName] = useState(user?.last_name || "")
    const [phoneNumber, setPhoneNumber] = useState(user?.phone_number || "")
    const [address, setAddress] = useState(user?.address || "")
    const [location, setLocation] = useState(user?.location || "")
    const [email, setEmail] = useState(user?.email || "")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (firstName === "" 
            && lastName === ""
            && phoneNumber === ""
            && address === ""
            && location === ""
            && email === "") return
        const formData = new FormData(e.target)
        onSubmit({
            email: formData.get("newEmail"),
            name: formData.get("newName"),
            password: formData.get("password"),
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            address: formData.get("address"),
            location: formData.get("location")
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
            <label htmlFor='firstName'>Enter your new name:</label>
            <Input
            type="text"
            id="firstName"
            name="firstName"
            className='authinput'
            placeholder='Your First Name'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}/>
            <Input
            type="text"
            id="lastName"
            name="lastName"
            className='authinput'
            placeholder='Your Last Name'
            value={lastName}
            onChange={e => setLastName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="newEmail">Enter your new email:</label>
            <Input 
            type="text"
            id="newEmail"
            name="newEmail"
            className='authInput'
            value={email}
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="newPhoneNumber">Enter your new phone number:</label>
            <Input 
            type="text"
            id="newPhoneNumber"
            name="newPhoneNumber"
            className='authInput'
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="newAddress">Enter your new address:</label>
            <Input 
            type="text"
            id="newAddress"
            name="newAddress"
            className='authInput'
            value={address}
            onChange={e => setAddress(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="newLocation">Enter your new location:</label>
            <Input 
            type="text"
            id="newLocation"
            name="newLocation"
            className='authInput'
            value={location}
            onChange={e => setLocation(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='password'>Enter password to confirm change:</label>
            <Input 
            type='password'
            id="password"
            name="password"
            className='authInput'
            value={password}
            onChange={e => setPassword(e.target.value)}/>
        </div>
        <Button
        type='submit'
        disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
        </Button>
    </form>
  )
}

UpdateProfileForm.propTypes = {
    onSubmit: PropTypes.func,
    successMessage: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool
}

export default UpdateProfileForm;