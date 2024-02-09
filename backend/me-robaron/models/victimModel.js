export class Victim {
  constructor (personID, reportID) {
    this.personID = personID
    this.reportID = reportID
  }

  save (db, callback) {
    const insertVictimSql = `
        INSERT INTO Victima (
            PersonaID, 
            DenunciaID
        ) VALUES (?, ?)`

    db.query(insertVictimSql, [this.personID, this.reportID], (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result)
      }
    })
  }
}
