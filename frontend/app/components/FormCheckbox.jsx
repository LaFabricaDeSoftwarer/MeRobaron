const Checkbox = ({ label, name, onChange, onBlur }) => {
  return (
    <div className='flex items-center gap-4'>
      <label htmlFor={name} className='block text-medium text-sm'>
        {label}
      </label>
      <input
        type='checkbox'
        id={name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className='form-checkbox mr-2 h-4 w-4 text-medium bg-primary border-medium rounded focus:outline-none focus:shadow-outline appearance-none'
      />
    </div>
  )
}

export default Checkbox
