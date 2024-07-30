import React from 'react'

const FormInput = ({ name, placeholder, type, label, value, onChange, onBlur }) => (
  <div className='col-span-1'>
    <label className='block text-white text-sm pb-2'>{label}</label>
    <input
      className='w-full px-2 py-1.5 text-medium leading-tight focus:outline-none focus:shadow-outline rounded-md bg-primary appearance-none'
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  </div>
)

export default FormInput
