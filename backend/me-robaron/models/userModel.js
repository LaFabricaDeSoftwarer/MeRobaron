export class User {
  constructor (
    apellido,
    nombre,
    tipoDocumento,
    nroDocumento,
    edad,
    telefono,
    calleUser,
    numeroUser,
    barrioUser,
    ciudadUser,
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
    this.calleUser = calleUser
    this.numeroUser = numeroUser
    this.barrioUser = barrioUser
    this.ciudadUser = ciudadUser
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

    return db.execute(insertUsuarioSql, [
      this.apellido, this.nombre, this.tipoDocumento, this.nroDocumento, this.edad,
      this.telefono, this.calleUser, this.numeroUser, this.barrioUser, this.ciudadUser,
      this.nacionalidad, this.estadoCivil, this.ocupacion, this.nivelEstudio, this.correoElectronico
    ])
  }
}
