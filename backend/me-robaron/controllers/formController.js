// Importa los modelos necesarios
import { Location } from '../models/locationModel.js'
import { Person } from '../models/personModel.js'
import { Report } from '../models/reportModel.js'
import { Reporter } from '../models/reporterModel.js'
import { Reported } from '../models/reportedModel.js'
// import { Victim } from '../models/victimModel.js'
// import { Witness } from '../models/witnessModel.js'
import db from '../dbconfig.js'

async function savePerson (personData, db) {
  const personObj = new Person(
    personData.apellido,
    personData.nombre,
    personData.tipoDocumento,
    personData.nroDocumento,
    personData.edad,
    personData.telefono,
    personData.calle,
    personData.numero,
    personData.barrio,
    personData.ciudad
  )
  return await personObj.save(db)
}

async function saveReporter (personID, reporterData, db) {
  const reporterObj = new Reporter(
    personID,
    reporterData.email,
    reporterData.aceptCondition
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
    reportData.date,
    reporterID,
    locationID,
    reportData.detail,
    reportData.conozcoAlDenunciado
  )
  return await reportObj.save(db)
}

async function saveReported (personID, reportID, reportedData, db) {
  const reportedObj = new Reported(
    personID,
    reportID,
    reportedData.clothing,
    reportedData.appearance
  )
  return await reportedObj.save(db)
}

export async function saveFormData (req, res) {
  try {
    const { location, person, report, reporter, reported } = req.body

    if (!person || !reporter || !location || !report || !reported) {
      return res.status(400).json({ error: 'Falta información requerida en el formulario.' })
    }

    const personResult = await savePerson(person, db)
    const reporterResult = await saveReporter(personResult.id, reporter, db)
    const locationResult = await saveLocation(location, db)
    const reportResult = await saveReport(report, reporterResult.id, locationResult.id, db)
    const reportedResult = await saveReported(personResult.id, reportResult.id, reported, db)

    res.status(201).json({
      location: locationResult,
      person: personResult,
      report: reportResult,
      reporter: reporterResult,
      reported: reportedResult

    })
  } catch (error) {
    console.error('Error al guardar en la base de datos:', error)
    res.status(500).json({ error: 'Hubo un error al procesar la solicitud' })
  }
}
