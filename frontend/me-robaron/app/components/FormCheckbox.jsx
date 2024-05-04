const Checkbox = ({ label, name, onChange }) => {
  return (
    <div className='flex items-center gap-4'>
      <label htmlFor={name} className='block text-white text-sm'>
        {label}
      </label>
      <input
        type='checkbox'
        id={name}
        name={name}
        onChange={onChange}
        className='h-4 w-4 text-white rounded-md accent-medium cursor-pointer'
      />
    </div>
  )
}

export default Checkbox
