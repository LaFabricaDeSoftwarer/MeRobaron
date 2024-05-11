export class Location {
  constructor (direccion, latitud, longitud) {
    this.direccion = direccion
    this.latitud = latitud
    this.longitud = longitud
    if (!this.direccion || !this.latitud || !this.longitud) {
      throw new Error('Faltan datos requeridos para la direccion')
    }
  }

  async save (db) {
    const insertLocationSql = `
      INSERT INTO Direccion (
        Direccion,
        Latitud,
        Longitud
      ) VALUES (?, ?, ?)
    `
    try {
      const [result] = await db.query(insertLocationSql, [this.direccion, this.latitud, this.longitud])
      return { id: result.insertId }
    } catch (error) {
      throw new Error('Error al guardar los datos: ' + error.message)
    }
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

export default Location
