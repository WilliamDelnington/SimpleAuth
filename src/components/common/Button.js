import PropTypes from 'prop-types';
import { useState } from 'react'

function Button({ 
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
    className={`
      w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 
      disabled:bg-gray-400 disabled:cursor-not-allowed ${className}
    `}
    // style={{
    //     padding: "1rem 0.5rem",
    //     fontWeight: 600,
    //     color: "white",
    //     backgroundColor: disabled ? "#9CA3AF" : (isHovered ? "#2563EB" : "#3B82F6"),
    //     borderRadius: "0.25rem"
    // }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default Button;