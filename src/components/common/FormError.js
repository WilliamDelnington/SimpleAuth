import React from 'react'

export default function FormError({ message }) {
    if (!message) return null

  return (
    <p style={{
        color: '#EF4444',       // Tailwind's red-500
        fontSize: '0.875rem',   // text-sm = 14px
        textAlign: 'center'}}>
      {message}
    </p>
  )
}
