import PropTypes from "prop-types"

function FormError({ message }) {
    if (!message) return null

  return (
    // <p style={{
    //     color: '#EF4444',       // Tailwind's red-500
    //     fontSize: '0.875rem',   // text-sm = 14px
    //     textAlign: 'center'}}>
    <p className='text-red-500 text-sm text-center'>
      {message}
    </p>
  )
}

FormError.propTypes = {
  message: PropTypes.string
}

export default FormError;