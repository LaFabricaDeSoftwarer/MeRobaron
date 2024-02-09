import { Reported } from '../models/reportedModel.js'
import db from '../dbconfig.js'

export const saveReported = (req, res) => {
  const {
    personID,
    reportID,
    clothing,
    appearance
  } = req.body

  const reported = new Reported(
    personID,
    reportID,
    clothing,
    appearance
  )

  reported.save(db, (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err)
      res.status(500).json({ error: 'Error interno del servidor' })
    } else {
      console.log('Datos insertados correctamente en la base de datos', result)
      res.json({ message: 'Datos recibidos correctamente' })
    }
  })
}
