// utils/api.js
import axios from 'axios'

const baseURL = 'http://localhost:3001'

export const sendFormData = async formData => {
  try {
    const response = await axios.post(`${baseURL}/formulario`, formData)
    return response.data
  } catch (error) {
    throw new Error('Error al enviar datos:', error)
  }
}
