export class Person {
  constructor (
    apellido,
    nombre,
    tipoDocumento,
    nroDocumento,
    edad,
    telefono,
    direccionID) {
    this.apellido = apellido
    this.nombre = nombre
    this.tipoDocumento = tipoDocumento
    this.nroDocumento = nroDocumento
    this.edad = edad
    this.telefono = telefono
    this.direccionID = direccionID
  }

  save (db, callback) {
    const insertPersonSql = `
          INSERT INTO Persona (
            Apellido,
            Nombre,
            TipoDocumento,
            NroDocumento,
            Edad,
            Telefono,
            DireccionID
          ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `

    db.query(insertPersonSql, [
      this.nombre, this.apellido, this.tipoDocumento, this.nroDocumento, this.edad,
      this.telefono, this.direccionID], (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result)
      }
    })
  }

  static getAll (db, callback) {
    const selectAllSql = 'SELECT * FROM Persona'
    db.query(selectAllSql, (err, results) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, results)
      }
    })
  }
}
