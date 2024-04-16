import { Location } from '../models/locationModel.js'
import db from '../dbconfig.js'

export const saveLocation = (req, res) => {
  const { direccion, latitud, longitud } = req.body

  if (!direccion || !latitud || !longitud) {
    return res.status(400).json({ error: 'Los datos de ubicación son inválidos o incompletos' })
  }

  const location = new Location(direccion, latitud, longitud)

  location.save(db, (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err)

      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'La ubicación ya existe en la base de datos' })
      }

      console.error('Consulta SQL fallida:', err.sql)

      return res.status(500).json({ error: 'Error interno del servidor' })
    }

    console.log('Datos insertados correctamente en la base de datos', result)
    res.json({ message: 'Ubicación guardada correctamente' })
  })
}

export const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.getAll(db)
    res.json(locations)
  } catch (err) {
    console.error('Error al obtener ubicaciones de la base de datos:', err)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}
