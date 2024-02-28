export class Witness {
  constructor (personID, reportID) {
    this.personID = personID
    this.reportID = reportID
  }

  save (db) {
    return new Promise((resolve, reject) => {
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
            reject(err)
          } else {
            resolve({ id: result.insertId })
          }
        }
      )
    })
  }
}
