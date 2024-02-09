import { Reporter } from '../models/reporterModel.js'
import db from '../dbconfig.js'

export const saveReporter = (req, res) => {
  const {
    personID,
    email,
    aceptCondition
  } = req.body

  const reporter = new Reporter(
    personID,
    email,
    aceptCondition
  )

  reporter.save(db, (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err)
      res.status(500).json({ error: 'Error interno del servidor' })
    } else {
      console.log('Datos insertados correctamente en la base de datos', result)
      res.json({ message: 'Datos recibidos correctamente' })
    }
  })
}
