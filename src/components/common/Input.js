import PropTypes from 'prop-types';
import { useState } from 'react'

function Input({
    name, 
    type = "text", 
    placeholder = "", 
    required = false,
    className = "",
    value = "",
    onChange = () => {}
}) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false)

  return (
    <input
    name={name}
    type={type}
    placeholder={placeholder}
    required={required}
    onFocus={handleFocus}
    onBlur={handleBlur}
    // style={{
    //     padding: "0.5rem 0.5rem 0.75rem 0.75rem",
    //     borderWidth: '1px',
    //     borderStyle: 'solid',
    //     borderColor: isFocused ? 'black' : '#D1D5DB',   // Tailwind's gray-300
    //     borderRadius: '0.25rem',  // rounded
    //     outline: 'none',
    //     maxWidth: "32rem",
    //     width: "100%"
    // }}
    className={`
      w-full px-3 py-2 border border-gray-300 rounded focus:outline-none 
      focus:ring-2 focus:ring-blue-500 ${className}
    `}
    value={value}
    onChange={onChange}/>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string
}

export default Input