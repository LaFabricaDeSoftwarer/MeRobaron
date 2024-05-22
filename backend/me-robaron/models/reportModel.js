export class Report {
  constructor (
    reporterID,
    fecha,
    locationID,
    detalle,
    conozcoAlDenunciado = false,
    hayVictimas = false,
    hayTestigos = false
  ) {
    this.fecha = fecha
    this.reporterID = reporterID
    this.locationID = locationID
    this.detalle = detalle
    this.conozcoAlDenunciado = conozcoAlDenunciado
    this.hayVictimas = hayVictimas
    this.hayTestigos = hayTestigos

    if (!this.fecha || !this.reporterID || !this.locationID || !this.detalle) {
      throw new Error('Faltan datos requeridos para la denuncia')
    }
  }

  async save (connectionPool) {
    const insertDenunciaSql = `
      INSERT INTO Denuncia (
        DenuncianteID,
        Fecha,
        DireccionID,
        Detalle,
        ConozcoAlDenunciado,
        HayVictimas,
        HayTestigos
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    try {
      const [result] = await connectionPool.query(insertDenunciaSql, [
        this.reporterID,
        this.fecha,
        this.locationID,
        this.detalle,
        this.conozcoAlDenunciado,
        this.hayVictimas,
        this.hayTestigos
      ])
      return { id: result.insertId }
    } catch (error) {
      throw new Error('Error al guardar los datos: ' + error.message)
    }
  }
}

export default Report
