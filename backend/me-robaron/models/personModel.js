export class Person {
  constructor (
    apellido,
    nombre,
    calle,
    numero,
    barrio,
    ciudad) {
    this.apellido = apellido
    this.nombre = nombre
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
            Calle,
            Numero,
            Barrio,
            Ciudad
          ) VALUES (?, ?, ?, ?, ?, ?)
        `

      db.query(insertPersonSql, [
        this.apellido, this.nombre, this.calle, this.numero, this.barrio, this.ciudad], (err, result) => {
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
