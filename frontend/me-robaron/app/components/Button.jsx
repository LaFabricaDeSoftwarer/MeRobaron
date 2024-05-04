import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button className='text-white bg-green font-medium rounded-sm text-sm px-3 py-2 me-2' onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
