import { Witness } from '../models/witnessModel.js'
import db from '../dbconfig.js'

export const saveWitness = (req, res) => {
  const {
    personID,
    reportID
  } = req.body

  const witness = new Witness(
    personID,
    reportID
  )

  witness.save(db, (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err)
      res.status(500).json({ error: 'Error interno del servidor' })
    } else {
      console.log('Datos insertados correctamente en la base de datos', result)
      res.json({ message: 'Datos recibidos correctamente' })
    }
  })
}
