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

  save (db, callback) {
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
        callback(err, null)
      } else {
        callback(null, result)
      }
    })
  }
}
