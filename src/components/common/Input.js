import React, { useState } from 'react'

export default function Input({
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
    style={{
        padding: "0.5rem 0.75rem",
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#D1D5DB',   // Tailwind's gray-300
        borderRadius: '0.25rem',  // rounded
        outline: 'none'
    }}
    className={className}
    value={value}
    onChange={onChange}/>
  )
}
