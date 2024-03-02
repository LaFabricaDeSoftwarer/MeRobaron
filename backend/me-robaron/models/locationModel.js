export class Location {
  constructor (direccion, latitud, longitud) {
    this.direccion = direccion
    this.latitud = latitud
    this.longitud = longitud
  }

  save (db) {
    return new Promise((resolve, reject) => {
      const insertLocationSql = `
        INSERT INTO Direccion (
          Direccion,
          Latitud,
          Longitud
        ) VALUES (?, ?, ?)`

      db.query(
        insertLocationSql,
        [this.direccion, this.latitud, this.longitud],
        (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve({ id: result.insertId })
          }
        }
      )
    })
  }

  static getAll (db) {
    return new Promise((resolve, reject) => {
      const selectAllSql = 'SELECT * FROM Direccion'
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
