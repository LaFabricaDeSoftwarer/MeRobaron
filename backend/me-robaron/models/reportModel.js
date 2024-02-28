export class Report {
  constructor (
    date,
    reporterID,
    locationID,
    detail
  ) {
    this.date = date
    this.reporterID = reporterID
    this.locationID = locationID
    this.detail = detail
  }

  save (db) {
    return new Promise((resolve, reject) => {
      const insertDenunciaSql = `
        INSERT INTO Denuncia (
          Fecha,
          DenuncianteID,
          DireccionID,
          Detalle
        ) VALUES (?, ?, ?, ?)
      `
      db.query(insertDenunciaSql, [
        this.date, this.reporterID, this.locationID, this.detail
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
