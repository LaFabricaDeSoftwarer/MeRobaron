import { Location } from '../models/locationModel.js'

import db from '../dbconfig.js'

async function saveLocation (locationData, db) {
  const locationObj = new Location(
    locationData.direccion,
    locationData.latitud,
    locationData.longitud
  )
  return await locationObj.save(db)
}

export async function saveFormDataLocation (req, res) {
  try {
    const { location } = req.body

    if (!location) {
      return res
        .status(400)
        .json({ error: 'Falta información requerida en el formulario.' })
    }

    const locationResult = await saveLocation(location, db)

    res.status(201).json({
      location: locationResult
    })
  } catch (error) {
    console.error('Error al guardar en la base de datos:', error)
    res.status(500).json({ error: 'Hubo un error al procesar la solicitud' })
  }
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
