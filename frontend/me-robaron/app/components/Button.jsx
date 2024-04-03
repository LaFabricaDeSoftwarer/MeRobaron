import React from 'react'

const Button = ({ children }) => {
  return (
    <div>
      <button className='bg-green text-grey font-normal py-2 px-4 rounded'>
        {children}
      </button>
    </div>
  )
}

export default Button
