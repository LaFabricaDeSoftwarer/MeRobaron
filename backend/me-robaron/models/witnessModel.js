export class Witness {
  constructor (personID, reportID) {
    this.personID = personID
    this.reportID = reportID
  }

  async save (connectionPool) {
    const insertWitnessSql = `
      INSERT INTO Testigo (
        PersonaID, 
        DenunciaID
      ) VALUES (?, ?)
    `
    try {
      const [result] = await connectionPool.query(insertWitnessSql, [
        this.personID,
        this.reportID
      ])
      return { id: result.insertId }
    } catch (error) {
      throw new Error('Error al guardar los datos: ' + error.message)
    }
  }
}

export default Witness
