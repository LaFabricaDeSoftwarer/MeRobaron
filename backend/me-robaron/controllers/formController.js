// Importa los modelos necesarios
import { Location } from '../models/locationModel.js'
import { Person } from '../models/personModel.js'
import { Report } from '../models/reportModel.js'
import { Reporter } from '../models/reporterModel.js'
import { Reported } from '../models/reportedModel.js'
import db from '../dbconfig.js'

export async function saveFormData (req, res) {
  try {
    const { location, person, report, reporter, reported } = req.body

    if (person) {
      const personObj = new Person(
        person.apellido,
        person.nombre,
        person.tipoDocumento,
        person.nroDocumento,
        person.edad,
        person.telefono,
        person.calle,
        person.numero,
        person.barrio,
        person.ciudad
      )
      const personResult = await personObj.save(db)

      if (reporter) {
        person.personaID = personResult.id
        const reporterObj = new Reporter(
          person.personaID,
          reporter.email,
          reporter.aceptCondition
        )
        const reporterResult = await reporterObj.save(db)

        if (location) {
          const locationObj = new Location(
            location.direction,
            location.latitud,
            location.longitud
          )
          const locationResult = await locationObj.save(db)

          if (report) {
            report.direccionID = locationResult.id
            const reportObj = new Report(
              report.date,
              reporterResult.id,
              report.direccionID,
              report.detail
            )
            const reportResult = await reportObj.save(db)

            if (reported) {
              reported.personaID = personResult.id
              reported.denunciaID = reportResult.id
              const reportedObj = await new Reported(
                reported.personaID,
                reported.denunciaID,
                reported.clothing,
                reported.appearance
              )

              const reportedResult = await reportedObj.save(db)

              // Envía una respuesta al frontend
              res.status(201).json({
                location: locationResult,
                person: personResult,
                report: reportResult,
                reporter: reporterResult,
                reported: reportedResult
              })
              return
            }
          }
        }
      }
    }
    return res.status(400).json({ error: 'Falta información requerida en el formulario.' })
  } catch (error) {
    console.error('Error al guardar en la base de datos:', error)
    res.status(500).json({ error: 'Hubo un error al procesar la solicitud' })
  }
}
