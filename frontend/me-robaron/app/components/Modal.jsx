import React from 'react'

const Modal = ({ children, onClose }) => {
  return (

    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-dark border-solid border-medium border-2 rounded-md py-2 px-2 w-80 relative'>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-1'
        >
          X
        </button>
        <div className='mt-2'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
