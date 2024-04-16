export class Reported {
  constructor (
    personID,
    reportID,
    vestimenta,
    apariencia
  ) {
    this.personID = personID
    this.reportID = reportID
    this.vestimenta = vestimenta
    this.apariencia = apariencia
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
        this.personID, this.reportID, this.vestimenta, this.apariencia
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
