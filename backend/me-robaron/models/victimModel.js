export class Victim {
  constructor (personID, reportID) {
    this.personID = personID
    this.reportID = reportID
  }

  save (db) {
    return new Promise((resolve, reject) => {
      const insertVictimSql = `
        INSERT INTO Victima (
            PersonaID, 
            DenunciaID
        ) VALUES (?, ?)`

      db.query(insertVictimSql, [this.personID, this.reportID], (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve({ id: result.insertId })
        }
      })
    })
  }
}
