// Importa los modelos necesarios
import { Location } from '../models/locationModel.js'
import { Person } from '../models/personModel.js'
import { Report } from '../models/reportModel.js'
import { Reporter } from '../models/reporterModel.js'
import { Reported } from '../models/reportedModel.js'
import { Victim } from '../models/victimModel.js'
import { Witness } from '../models/witnessModel.js'
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

async function saveReport (reportData, reporterID, locationID, db) {
  const reportObj = new Report(
    reporterID,
    reportData.fecha,
    locationID,
    reportData.detalle,
    reportData.conozcoAlDenunciado,
    reportData.hayVictimas,
    reportData.hayTestigos

  )
  return await reportObj.save(db)
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

async function saveVictim (personID, reportID, db) {
  const victimObj = new Victim(
    personID,
    reportID
  )
  return await victimObj.save(db)
}

async function saveWitness (personID, reportID, db) {
  const witnessObj = new Witness(
    personID,
    reportID
  )
  return await witnessObj.save(db)
}

export async function saveFormData (req, res) {
  const { reporter, location, person, report, reported } = req.body

  if (!reporter || !location || !person || !report) {
    console.log('Faltan datos en el formulario:', {
      reporter,
      location,
      person,
      report,
      reported
    })
    throw new Error('Falta información requerida en el formulario')
  } else {
    console.log('req.body', req.body)
  }

  try {
    const connection = await db.getConnection()

    const reporterResult = await saveReporter(reporter, connection)
    const locationResult = await saveLocation(location, connection)
    const personResult = await savePerson(person, connection)
    const reportResult = await saveReport(report, reporterResult.id, locationResult.id, connection)
    const reportedResult = await saveReported(personResult.id, reportResult.id, reported, connection)
    const victimResult = await saveVictim(personResult.id, reportResult.id, connection)
    const witnessResult = await saveWitness(personResult.id, reportResult.id, connection)

    // Crear objeto de datos
    const formData = {
      reporter: reporterResult,
      location: locationResult,
      person: personResult,
      report: reportResult,
      reported: reportedResult,
      victims: victimResult || [],
      witness: witnessResult || []
    }

    res.status(201).json(formData)
    connection.release()
  } catch (error) {
    console.error('Error al guardar los datos:', error)
    res.status(500).json({ error: 'Error al guardar los datos' })
  }
}
