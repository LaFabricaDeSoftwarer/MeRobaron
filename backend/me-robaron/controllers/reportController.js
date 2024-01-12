import { Report } from '../models/reportModel.js'
import db from '../dbconfig.js'

export const saveReport = (req, res) => {
  const {
    usuarioID,
    fecha,
    horaAproximada,
    otrasReferencias,
    escenarioDelHecho,
    detalle,
    medioTransportePersona,
    tiposObjetosSustraidos
  } = req.body

  const report = new Report(
    usuarioID,
    fecha,
    horaAproximada,
    otrasReferencias,
    escenarioDelHecho,
    detalle,
    medioTransportePersona,
    tiposObjetosSustraidos
  )

  report.save(db, (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err)
      res.status(500).json({ error: 'Error interno del servidor' })
    } else {
      console.log('Datos insertados correctamente en la base de datos')
      res.json({ message: 'Datos recibidos correctamente' })
    }
  })
}
