export class Location {
  constructor (address, latitude, longitude) {
    this.address = address
    this.latitude = latitude
    this.longitude = longitude
  }

  save (db, callback) {
    const insertDireccionSql =
      'INSERT INTO Direccion (Nombre, Latitud, Longitud) VALUES (?, ?, ?)'
    db.query(
      insertDireccionSql,
      [this.address, this.latitude, this.longitude],
      (err, result) => {
        if (err) {
          callback(err, null)
        } else {
          callback(null, result)
        }
      }
    )
  }

  static getAll (db, callback) {
    const selectAllSql = 'SELECT * FROM Direccion'
    db.query(selectAllSql, (err, results) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, results)
      }
    })
  }
}
