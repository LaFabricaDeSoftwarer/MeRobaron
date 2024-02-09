export class Witness {
  constructor (personID, reportID) {
    this.personID = personID
    this.reportID = reportID
  }

  save (db, callback) {
    const insertWitnessSql = `
        INSERT INTO Testigo (
            PersonaID, 
            DenunciaID
        ) VALUES (?, ?)`

    db.query(
      insertWitnessSql,
      [this.personID, this.reportID],
      (err, result) => {
        if (err) {
          callback(err, null)
        } else {
          callback(null, result)
        }
      }
    )
  }
}
