import { Location } from '../models/locationModel.js'
import db from '../dbconfig.js'

export const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.getAll(db)
    res.json(locations)
  } catch (err) {
    console.error('Error al obtener ubicaciones de la base de datos:', err)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}
