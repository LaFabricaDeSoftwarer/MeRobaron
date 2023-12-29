import Location from '../models/locationModel.js'
import db from '../dbconfig.js'

export const saveLocation = (req, res) => {
  const { address, latitude, longitude } = req.body
  const location = new Location(address, latitude, longitude)

  location.save(db, (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err)
      res.status(500).json({ error: 'Error interno del servidor' })
    } else {
      console.log('Datos insertados correctamente en la base de datos')
      res.json({ message: 'Datos recibidos correctamente' })
    }
  })
}

export const getAllLocations = (req, res) => {
  Location.getAll(db, (err, locations) => {
    if (err) {
      console.error('Error al obtener ubicaciones de la base de datos:', err)
      res.status(500).json({ error: 'Error interno del servidor' })
    } else {
      res.json(locations)
    }
  })
}
