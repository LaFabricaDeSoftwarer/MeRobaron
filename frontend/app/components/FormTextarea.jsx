import React from 'react'

const FormTextarea = ({ name, placeholder, type, label, value, onChange }) => {
  return (
    <div className='col-span-1'>
      <label className='block text-white text-sm pb-2'>{label}</label>
      <textarea
        className='w-full px-3 py-2 text-medium leading-tight focus:outline-none focus:shadow-outline bg-primary rounded-md appearance-none'
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormTextarea
