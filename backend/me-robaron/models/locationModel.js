export class Location {
  constructor (calle, numero, barrio, ciudad, latitude, longitude) {
    this.calle = calle
    this.numero = numero
    this.barrio = barrio
    this.ciudad = ciudad
    this.latitude = latitude
    this.longitude = longitude
  }

  save (db, callback) {
    const insertLocationSql = `
        INSERT INTO Direccion (
            Calle, 
            Numero,
            Barrio,
            Ciudad,
            Latitud,
            Longitud
        ) VALUES (?, ?, ?, ?, ?, ?)`

    db.query(
      insertLocationSql,
      [this.calle, this.numero, this.barrio, this.ciudad, this.latitude, this.longitude],
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
