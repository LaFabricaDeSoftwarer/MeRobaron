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
        console.error('Error al insertar datos en la base de datos:', err)
      } else {
        console.log('Datos insertados correctamente en la base de datos')
      }
    })
  }
}
