import React from 'react'
// import styles from './styles.module.css'

export default function SearchInput ({ value, onChange, onClear }) {
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      onClear={onClear}
      className='md:p-2 w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-t-md bg-medium appearance-none'
      placeholder='Buscar dirección'
    />
  )
}
