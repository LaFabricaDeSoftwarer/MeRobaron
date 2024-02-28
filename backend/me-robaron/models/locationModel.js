export class Location {
  constructor (direction, latitude, longitude) {
    this.direction = direction
    this.latitude = latitude
    this.longitude = longitude
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
        [this.direction, this.latitude, this.longitude],
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
