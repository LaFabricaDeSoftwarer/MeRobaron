export class User {
  constructor (
    apellido,
    nombre,
    tipoDocumento,
    nroDocumento,
    edad,
    telefono,
    calle,
    numero,
    barrio,
    ciudad,
    nacionalidad,
    estadoCivil,
    ocupacion,
    nivelEstudio,
    correoElectronico) {
    this.apellido = apellido
    this.nombre = nombre
    this.tipoDocumento = tipoDocumento
    this.nroDocumento = nroDocumento
    this.edad = edad
    this.telefono = telefono
    this.calle = calle
    this.numero = numero
    this.barrio = barrio
    this.ciudad = ciudad
    this.nacionalidad = nacionalidad
    this.estadoCivil = estadoCivil
    this.ocupacion = ocupacion
    this.nivelEstudio = nivelEstudio
    this.correoElectronico = correoElectronico
  }

  saveUser (db) {
    const insertUsuarioSql = `
        INSERT INTO Usuario (
          Apellido,
          Nombre,
          TipoDocumento,
          NroDocumento,
          Edad,
          Telefono,
          Calle,
          Numero,
          Barrio,
          Ciudad,
          Nacionalidad,
          EstadoCivil,
          Ocupacion,
          NivelEstudio,
          CorreoElectronico
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `

    db.query(insertUsuarioSql, [
      this.nombre, this.apellido, this.tipoDocumento, this.nroDocumento, this.edad,
      this.telefono, this.calle, this.numero, this.barrio, this.ciudad,
      this.nacionalidad, this.estadoCivil, this.ocupacion, this.nivelEstudio, this.correoElectronico
    ], (err, result) => {
      if (err) {
        console.error('Error al insertar datos en la base de datos:', err)
      } else {
        console.log('Datos insertados correctamente en la base de datos')
      }
    })
  }
}
