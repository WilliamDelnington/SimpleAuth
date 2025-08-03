import React from 'react'

export default function ForgotPasswordForm({ onSubmit, successMessage }) {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        onSubmit({
            email: formData.get("email")
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        (error && <FormError message={error} />)
        (successMessage && <p style={{
            color: "#48bb78",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            textAlign: "center"
        }}>{successMessage}</p>)
        <label htmlFor='email'>Enter your email:</label>
        <Input 
        type='text' 
        id="email" 
        name='email' 
        value={email}
        onChange={e => setEmail(e.target.value)}/>
        <Button 
        type='submit'
        disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
        </Button>
    </form>
  )
}
