export class Reporter {
  constructor (
    personID,
    email,
    aceptCondition
  ) {
    this.personID = personID
    this.email = email
    this.aceptCondition = aceptCondition
  }

  save (db) {
    return new Promise((resolve, reject) => {
      const insertReporterSql = `
        INSERT INTO Denunciante (
          PersonaID,
          Email,
          AceptaCondicion         
        ) VALUES (?, ?, ?)
      `

      db.query(insertReporterSql, [
        this.personID, this.email,
        this.aceptCondition], (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve({ id: result.insertId })
        }
      })
    })
  }
}
