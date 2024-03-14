// Importa los modelos necesarios
import { Location } from '../models/locationModel.js'
import { Person } from '../models/personModel.js'
import { Report } from '../models/reportModel.js'
import { Reporter } from '../models/reporterModel.js'
import { Reported } from '../models/reportedModel.js'
import db from '../dbconfig.js'

async function saveReporter (reporterData, db) {
  const reporterObj = new Reporter(
    reporterData.email,
    reporterData.aceptoCondicion,
    reporterData.apellido,
    reporterData.nombre,
    reporterData.tipoDocumento,
    reporterData.nroDocumento,
    reporterData.edad,
    reporterData.telefono,
    reporterData.calle,
    reporterData.numero,
    reporterData.barrio,
    reporterData.ciudad

  )
  return await reporterObj.save(db)
}

async function saveLocation (locationData, db) {
  const locationObj = new Location(
    locationData.direccion,
    locationData.latitud,
    locationData.longitud
  )
  return await locationObj.save(db)
}

async function saveReport (reportData, reporterID, locationID, db) {
  const reportObj = new Report(
    reporterID,
    reportData.fecha,
    locationID,
    reportData.detalle,
    reportData.conozcoAlDenunciado
  )
  return await reportObj.save(db)
}

async function savePerson (personData, db) {
  const personObj = new Person(
    personData.apellido,
    personData.nombre,
    personData.calle,
    personData.numero,
    personData.barrio,
    personData.ciudad
  )
  return await personObj.save(db)
}

async function saveReported (personID, reportID, reportedData, db) {
  const reportedObj = new Reported(
    personID,
    reportID,
    reportedData.vestimenta,
    reportedData.apariencia
  )
  return await reportedObj.save(db)
}

export async function saveFormData (req, res) {
  try {
    const { reporter, location, person, report, reported } = req.body

    if (!reporter || !location || !person || !report || !reported) {
      return res.status(400).json({ error: 'Falta información requerida en el formulario.' })
    }

    const reporterResult = await saveReporter(reporter, db)
    const locationResult = await saveLocation(location, db)
    const personResult = await savePerson(person, db)
    const reportResult = await saveReport(report, reporterResult.id, locationResult.id, db)
    const reportedResult = await saveReported(personResult.id, reportResult.id, reported, db)

    res.status(201).json({
      reporter: reporterResult,
      location: locationResult,
      person: personResult,
      report: reportResult,
      reported: reportedResult

    })
  } catch (error) {
    console.error('Error al guardar en la base de datos:', error)
    res.status(500).json({ error: 'Hubo un error al procesar la solicitud' })
  }
}
