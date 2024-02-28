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

  save (db) {
    return new Promise((resolve, reject) => {
      const insertReportedSql = `
            INSERT INTO Denunciado (
                PersonaID, 
                DenunciaID,
                Vestimenta,
                AparienciaFisica
            ) VALUES (?, ?, ?, ?)
        `
      db.query(insertReportedSql, [
        this.personID, this.reportID, this.clothing, this.appearance
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
