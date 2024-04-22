import React from 'react'

const Input = ({ name, placeholder, type }) => (
  <div className='col-span-1'>
    <input
      className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
      type={type}
      name={name}
      placeholder={placeholder}
    />
  </div>
)

const PersonForm = () => {
  return (
    <section className='grid grid-cols-1 gap-4'>
      {
        [
          { name: 'nombre', placeholder: 'Nombre', type: 'text' },
          { name: 'apellido', placeholder: 'Apellido', type: 'text' },
          { name: 'calle', placeholder: 'Calle', type: 'text' },
          { name: 'numero', placeholder: 'Numero', type: 'text' },
          { name: 'barrio', placeholder: 'Barrio', type: 'text' },
          { name: 'ciudad', placeholder: 'Ciudad', type: 'text' }
        ].map((input, index) => (
          <Input key={index} {...input} />
        ))
      }
    </section>
  )
}

export default PersonForm
