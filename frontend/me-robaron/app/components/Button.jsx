import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button className='bg-green text-white text-xs md:text-base font-normal md:py-2 py-2 md:px-4 px-1 md:w-30 w- 20 rounded-sm' onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
