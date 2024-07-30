import React, { useEffect, useState } from 'react'
import { fetchLocalidades } from '@/app/services/apiLocalidades'

const LocalidadesSelect = ({ selectedLocalidad, setSelectedLocalidad }) => {
  const [localidades, setLocalidades] = useState([])

  // uso useEffect para hacer la llamada a la API y obtener las localidades, esto se ejecuta una vez que el componente se monta
  useEffect(() => {
    const fetchLocalidadesData = async () => {
      try {
        const getLocalidadesData = await fetchLocalidades()
        setLocalidades(getLocalidadesData)
      } catch (error) {
        console.error('Error fetching localidades:', error.message)
      }
    }

    fetchLocalidadesData()
  }, [])

  const handleSelectChange = (event) => {
    setSelectedLocalidad(event.target.value)
  }

  return (
    <div>
      <label className='flex items-center text-medium text-sm cursor-pointer'>Localidad:<span className='text-danger ml-1'>*</span>
      </label>
      <select
        id='localidad' name='localidad' value={selectedLocalidad} onChange={handleSelectChange} className='w-full px-2 py-1 text-medium leading-tight focus:outline-none focus:shadow-outline rounded-md appearance-none border border-light'
      >
        <option value=''>Seleccione una localidad</option>
        {localidades.map((localidad, index) => (
          <option key={index}>{localidad.nombre}</option>
        ))}
      </select>
    </div>
  )
}

export default LocalidadesSelect
