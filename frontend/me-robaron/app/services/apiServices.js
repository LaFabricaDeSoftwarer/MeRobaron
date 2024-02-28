import axios from 'axios'

export const submitForm = async (values) => {
  try {
    const response = await axios.post('http://localhost:3001/formulario', {
      location: {
        direccion: values.direccion,
        latitud: values.latitud,
        longitud: values.longitud
      },
      person: {
        apellido: values.apellido,
        nombre: values.nombre,
        tipoDocumento: values.tipoDocumento,
        nroDocumento: values.nroDocumento,
        edad: values.edad,
        telefono: values.telefono,
        calle: values.calle,
        numero: values.numero,
        barrio: values.barrio,
        ciudad: values.ciudad
      },
      report: {
        date: values.date,
        detail: values.detail
      },
      reporter: {
        email: values.email,
        aceptCondition: values.aceptCondition
      },
      reported: {
        clothing: values.clothing,
        appearance: values.appearance
      }
    })
    return response.data
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    throw new Error('Hubo un error al enviar el formulario')
  }
}

export const fetchLocations = async () => {
  try {
    const response = await axios.get('http://localhost:3001/direcciones')
    if (response.status === 200) {
      const data = response.data
      console.log('Datos de ubicaciones obtenidos correctamente:', data)
      return data
    } else {
      throw new Error('Error al obtener datos del backend')
    }
  } catch (error) {
    console.error(`Error: ${error.message}`)
    throw new Error(`Error: ${error.message}`)
  }
}
