import { Location } from '../models/locationModel.js'
import { Person } from '../models/personModel.js'
import { Report } from '../models/reportModel.js'
import { Reporter } from '../models/reporterModel.js'
import { Reported } from '../models/reportedModel.js'
import { Victim } from '../models/victimModel.js'
import { Witness } from '../models/witnessModel.js'
import connectionPool from '../dbconfig.js'

async function saveReporter (reporterData, connectionPool) {
  const reporterObj = new Reporter(
    reporterData.email,
    reporterData.aceptaCondicion,
    reporterData.apellido,
    reporterData.nombre,
    reporterData.tipoDocumento,
    reporterData.nroDocumento,
    reporterData.edad,
    reporterData.telefono,
    reporterData.calle,
    reporterData.numero,
    reporterData.barrio,
    reporterData.localidad

  )
  return await reporterObj.save(connectionPool)
}

async function saveLocation (locationData, connectionPool) {
  const locationObj = new Location(
    locationData.direccion,
    locationData.latitud,
    locationData.longitud
  )
  return await locationObj.save(connectionPool)
}
async function savePerson (personData, connectionPool) {
  const personObj = new Person(
    personData.apellido || '',
    personData.nombre || '',
    personData.calle || '',
    personData.barrio || '',
    personData.numero || '',
    personData.ciudad || '',
    personData.tipoDocumento || '',
    personData.nroDocumento || ''
  )
  return await personObj.save(connectionPool)
}

async function saveReport (reportData, reporterID, locationID, connectionPool) {
  const reportObj = new Report(
    reporterID,
    reportData.fecha,
    locationID,
    reportData.detalle,
    reportData.conozcoAlDenunciado,
    reportData.hayVictimas,
    reportData.hayTestigos

  )
  return await reportObj.save(connectionPool)
}

async function saveReported (personID, reportID, reportedData, connectionPool) {
  const reportedObj = new Reported(
    personID,
    reportID,
    reportedData.vestimenta,
    reportedData.apariencia
  )
  return await reportedObj.save(connectionPool)
}

async function saveVictim (personID, reportID, connectionPool) {
  const victimObj = new Victim(
    personID,
    reportID
  )
  return await victimObj.save(connectionPool)
}

async function saveWitness (personID, reportID, connectionPool) {
  const witnessObj = new Witness(
    personID,
    reportID
  )
  return await witnessObj.save(connectionPool)
}

export async function saveFormData (req, res) {
  const { reporter, location, report, reporteds, victims, witnesses } = req.body

  if (!reporter || !location || !report) {
    console.log('Faltan datos en el formulario:', { reporter, location, report, reporteds })
    throw new Error('Falta información requerida en el formulario')
  } else {
    console.log('Datos en el formulario:', { reporter, location, report, reporteds, victims, witnesses })
  }

  try {
    const connection = await connectionPool.getConnection()

    const reporterResult = await saveReporter(reporter, connection)
    console.log('reporterResult', reporterResult)
    const locationResult = await saveLocation(location, connection)
    console.log('locationResult', locationResult)
    const reportResult = await saveReport(report, reporterResult.id, locationResult.id, connection)
    console.log('reportResult', reportResult)

    const reportedResults = await Promise.all(reporteds.map(async (reported) => {
      const personResult = await savePerson(reported, connection)
      return await saveReported(personResult.id, reportResult.id, reported, connection)
    }))

    const victimResults = await Promise.all(victims.map(async (victim) => {
      const personResult = await savePerson(victim, connection)
      return await saveVictim(personResult.id, reportResult.id, connection)
    }))

    const witnessResults = await Promise.all(witnesses.map(async (witness) => {
      const personResult = await savePerson(witness, connection)
      return await saveWitness(personResult.id, reportResult.id, connection)
    }))

    const formData = {
      reporter: reporterResult,
      location: locationResult,
      report: reportResult,
      reporteds: reportedResults,
      victims: victimResults,
      witnesses: witnessResults
    }

    res.status(201).json(formData)
    connection.release()
  } catch (error) {
    console.error('Error al guardar los datos:', error)
    res.status(500).json({ error: 'Error al guardar los datos: ' + error.message })
  }
}
