import { User } from '../models/userModel.js'
import db from '../dbconfig.js'

export const saveUser = (req, res) => {
  const { usuarioID, apellido, tipoDocumento, nroDocumento, edad, telefono, calle, numero, barrio, ciudad, nacionalidad, estadoCivil, ocupacion, nivelEstudio, correoElectronico } = req.body
  const user = new User(usuarioID, apellido, tipoDocumento, nroDocumento, edad, telefono, calle, numero, barrio, ciudad, nacionalidad, estadoCivil, ocupacion, nivelEstudio, correoElectronico)

  user.saveUser(db, (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err)
      res.status(500).json({ error: 'Error interno del servidor' })
    } else {
      console.log('Datos insertados correctamente en la base de datos')
      res.json({ message: 'Datos recibidos correctamente' })
    }
  })
}
