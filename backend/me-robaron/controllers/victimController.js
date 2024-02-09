import { Victim } from '../models/victimModel.js'
import db from '../dbconfig.js'

export const saveVictim = async (req, res) => {
  try {
    const { personID, reportID } = req.body

    const victim = new Victim(personID, reportID)

    victim.save(db, (err, result) => {
      if (err) {
        console.error('Error al insertar datos en la base de datos:', err)
        res.status(500).json({ error: 'Error interno del servidor' })
      } else {
        console.log('Datos insertados correctamente en la base de datos', result)
        res.json({ message: 'Datos recibidos correctamente' })
      }
    })
  } catch (error) {
    console.error('Error inesperado:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}
