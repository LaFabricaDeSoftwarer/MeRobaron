export class Person {
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
    ciudad) {
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
  }

  save (db) {
    return new Promise((resolve, reject) => {
      const insertPersonSql = `
          INSERT INTO Persona (
            Apellido,
            Nombre,
            TipoDocumento,
            NroDocumento,
            Edad,
            Telefono,
            Calle,
            Numero,
            Barrio,
            Ciudad
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `

      db.query(insertPersonSql, [
        this.apellido, this.nombre, this.tipoDocumento, this.nroDocumento, this.edad,
        this.telefono, this.calle, this.numero, this.barrio, this.ciudad], (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve({ id: result.insertId })
        }
      })
    })
  }

  static getAll (db) {
    return new Promise((resolve, reject) => {
      const selectAllSql = 'SELECT * FROM Persona'
      db.query(selectAllSql, (err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      })
    })
  }
}
