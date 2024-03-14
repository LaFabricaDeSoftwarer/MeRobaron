export class Report {
  constructor (
    date,
    reporterID,
    locationID,
    detail,
    conozcoAlDenunciado = false
  ) {
    this.date = date
    this.reporterID = reporterID
    this.locationID = locationID
    this.detail = detail
    this.conozcoAlDenunciado = conozcoAlDenunciado
  }

  save (db) {
    return new Promise((resolve, reject) => {
      const insertDenunciaSql = `
        INSERT INTO Denuncia (
          Fecha,
          DenuncianteID,
          DireccionID,
          Detalle,
          ConozcoAlDenunciado
        ) VALUES (?, ?, ?, ?, ?)
      `
      db.query(insertDenunciaSql, [
        this.date, this.reporterID, this.locationID, this.detail, this.conozcoAlDenunciado
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
