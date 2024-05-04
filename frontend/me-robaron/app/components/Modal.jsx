import React from 'react'

const Modal = ({ children }) => {
  return (

    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-dark border-solid border-medium border-2 rounded-md py-2 px-2 w-80'>
        <div className='mt-2'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
