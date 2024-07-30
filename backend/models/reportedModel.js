export class Reported {
  constructor (personID, reportID, vestimenta, apariencia) {
    this.personID = personID
    this.reportID = reportID
    this.vestimenta = vestimenta
    this.apariencia = apariencia
  }

  async save (connectionPool) {
    const insertReportedSql = `
      INSERT INTO Denunciado (
        PersonaID, 
        DenunciaID,
        Vestimenta,
        Apariencia
      ) VALUES (?, ?, ?, ?)
    `
    try {
      const [result] = await connectionPool.query(insertReportedSql, [
        this.personID,
        this.reportID,
        this.vestimenta,
        this.apariencia
      ])
      return { id: result.insertId }
    } catch (error) {
      throw new Error('Error al guardar los datos: ' + error.message)
    }
  }
}

export default Reported
