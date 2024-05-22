import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button className='text-white bg-green text-sm px-1.5 py-1.5 md:me-2' onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
