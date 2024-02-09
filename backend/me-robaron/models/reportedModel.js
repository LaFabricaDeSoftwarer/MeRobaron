export class Reported {
  constructor (
    personID,
    reportID,
    clothing,
    appearance
  ) {
    this.personID = personID
    this.reportID = reportID
    this.clothing = clothing
    this.appearance = appearance
  }

  save (db, callback) {
    const insertReportedSql = `
            INSERT INTO Denunciado (
                PersonaID, 
                DenunciaID,
                Vestimenta,
                AparienciaFisica
            ) VALUES (?, ?, ?, ?)
            ) VALUES (?, ?, ?, ?)
        `
    db.query(insertReportedSql, [
      this.personID, this.reportID, this.clothing, this.appearance
    ], (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result)
      }
    })
  }
}
