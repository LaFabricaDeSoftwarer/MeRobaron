import { Person } from '../models/personModel.js'
import db from '../dbconfig.js'

export const savePerson = (req, res) => {
  const {
    apellido,
    nombre,
    tipoDocumento,
    nroDocumento,
    edad,
    telefono,
    direccionID
  } = req.body

  const person = new Person(
    apellido,
    nombre,
    tipoDocumento,
    nroDocumento,
    edad,
    telefono,
    direccionID
  )

  person.save(db, (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err)
      res.status(500).json({ error: 'Error interno del servidor' })
    } else {
      console.log('Datos insertados correctamente en la base de datos', result)
      res.json({ message: 'Datos recibidos correctamente' })
    }
  })
}

export const getPerson = (req, res) => {
  Person.getAll(db, (err, people) => {
    if (err) {
      console.error('Error al obtener ubicaciones de la base de datos:', err)
      res.status(500).json({ error: 'Error interno del servidor' })
    } else {
      res.json(people)
    }
  })
}
