import React from 'react'

const Button = ({ text, onClick, type = 'button', disabled = false, width = 'auto', background, color }) => {
  return (
    <button
      className={`
        hover:opacity-80
        text-white
        font-light
        py-[4px] 
        px-2 
        transition-colors 
        duration-200 
        focus:outline-none 
        focus:ring-2 
        focus:ring-opacity-50
        focus:ring-offset-2
        text-xs 
        md:text-sm
        h-full
        rounded-md
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={{ width, background, color, fontWeight: color === '#0F5EFD' ? 'normal' : 'light' }}
    >
      {text}
    </button>
  )
}

export default Button
