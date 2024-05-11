export class Victim {
  constructor (personID, reportID) {
    this.personID = personID
    this.reportID = reportID
  }

  async save (db) {
    const insertVictimSql = `
      INSERT INTO Victima (
        PersonaID, 
        DenunciaID
      ) VALUES (?, ?)
    `
    try {
      const [result] = await db.query(insertVictimSql, [this.personID, this.reportID])
      return { id: result.insertId }
    } catch (error) {
      throw new Error('Error al guardar los datos: ' + error.message)
    }
  }
}

export default Victim
