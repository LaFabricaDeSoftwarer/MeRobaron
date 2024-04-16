import axios from 'axios'

const baseURL = 'http://localhost:3001'

export async function saveFormData (formData) {
  try {
    const response = await axios.post(`${baseURL}/formulario`, formData)
    return response.data // Devuelve los datos recibidos del servidor
  } catch (error) {
    throw new Error('Error al enviar la solicitud:', error)
  }
}

export async function saveLocation (locationData) {
  try {
    const response = await axios.post(`${baseURL}/direcciones`, {
      location: locationData
    })
    console.log('Ubicación guardada exitosamente:', response.data)
    return response.data
  } catch (error) {
    throw new Error('Error al enviar la solicitud:', error)
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
