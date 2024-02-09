import { Location } from '../models/locationModel.js'
import db from '../dbconfig.js'

export const saveLocation = (req, res) => {
  const {
    calle,
    numero,
    barrio,
    ciudad,
    latitud,
    longitud
  } = req.body

  const location = new Location(calle, numero, barrio, ciudad, latitud, longitud)

  location.save(db, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error al guardar la ubicación en la base de datos.' })
    } else {
      res.status(201).json({ message: 'Ubicación guardada exitosamente.', location: result })
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
