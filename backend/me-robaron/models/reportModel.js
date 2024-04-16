export class Report {
  constructor (
    reporterID,
    fecha,
    locationID,
    detalle,
    conozcoAlDenunciado = false
  ) {
    this.fecha = fecha
    this.reporterID = reporterID
    this.locationID = locationID
    this.detalle = detalle
    this.conozcoAlDenunciado = conozcoAlDenunciado
  }

  save (db) {
    return new Promise((resolve, reject) => {
      const insertDenunciaSql = `
        INSERT INTO Denuncia (
          DenuncianteID,
          Fecha,
          DireccionID,
          Detalle,
          ConozcoAlDenunciado
        ) VALUES (?, ?, ?, ?, ?)
      `
      db.query(insertDenunciaSql, [
        this.reporterID, this.fecha, this.locationID, this.detalle, this.conozcoAlDenunciado
      ], (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve({ id: result.insertId })
        }
      })
    })
  }
}
