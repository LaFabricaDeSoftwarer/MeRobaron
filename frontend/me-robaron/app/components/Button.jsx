import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button className='bg-green text-white text-xs px-2 md:w-30 w-16 rounded-md text-center h-full flex justify-center items-center' onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
