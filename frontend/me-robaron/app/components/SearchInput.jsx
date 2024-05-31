import React from 'react'
// import styles from './styles.module.css'

export default function SearchInput ({ value, onChange, onBlur }) {
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className='w-full px-3 py-1.5 text-white focus:outline-none focus:shadow-outline  bg-medium appearance-none text-sm'
      placeholder='Buscar dirección'
    />
  )
}
