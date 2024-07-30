import axios from 'axios'

export const fetchLocalidades = async () => {
  try {
    const response = await axios.get('https://apis.datos.gob.ar/georef/api/localidades?provincia=14&campos=id,nombre&max=5000')
    console.log('Localidades:', response.data.localidades)
    return response.data.localidades
  } catch (error) {
    console.error('Error al obtener localidades:', error)
  }
}
