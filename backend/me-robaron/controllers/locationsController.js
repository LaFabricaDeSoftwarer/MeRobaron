import { Location } from '../models/locationModel.js'
import db from '../dbconfig.js'

export const saveLocation = (req, res) => {
  const { direccion, latitud, longitud } = req.body
  // creo instancia de Location para representar la nueva ubicación que se va a guardar en la base de datos.
  const location = new Location(direccion, latitud, longitud)
  location.save(db, (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err)

      // Manejar específicamente el error de entrada duplicada
      if (err.code === 'ER_DUP_ENTRY') {
        return result.status(400).json({ error: 'Entrada duplicada en la base de datos' })
      }
      console.error('Consulta SQL fallida:', err.sql)

      result.status(500).json({ error: 'Error interno del servidor' })
    } else {
      console.log('Datos insertados correctamente en la base de datos', result)
      res.json({ message: 'Datos recibidos correctamente' })
    }
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
