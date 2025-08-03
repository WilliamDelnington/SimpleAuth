import React, { useState } from 'react'

export default function ({ 
    children, 
    type = "button", 
    disabled = false,
    onClick = () => {},
    className = ""
}) {
    const [isHovered, setIsHovered] = useState(false)

  return (
    <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={className}
    style={{
        padding: "1rem 0.5rem",
        fontWeight: 600,
        color: "white",
        backgroundColor: disabled ? "#9CA3AF" : (isHovered ? "#2563EB" : "#3B82F6"),
        borderRadius: "0.25rem"
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      {children}
    </button>
  )
}
