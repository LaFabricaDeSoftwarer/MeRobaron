export class Location {
  constructor (address, latitude, longitude) {
    this.address = address
    this.latitude = latitude
    this.longitude = longitude
  }

  static save (db) {
    const insertDireccionSql = 'INSERT INTO Direccion (Nombre, Latitud, Longitud) VALUES (?, ?, ?)'

    return db.execute(insertDireccionSql, [this.address, this.latitude, this.longitude])
  }

  static getAll (db) {
    const selectAllSql = 'SELECT * FROM Direccion'

    return db.query(selectAllSql)
  }
}
