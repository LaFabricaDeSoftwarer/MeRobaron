export class Report {
  constructor (
    fecha,
    horaAproximada,
    otrasReferencias,
    escenarioDelHecho,
    detalle,
    medioTransportePersona,
    tiposObjetosSustraidos
  ) {
    this.fecha = fecha
    this.horaAproximada = horaAproximada
    this.otrasReferencias = otrasReferencias
    this.escenarioDelHecho = escenarioDelHecho
    this.detalle = detalle
    this.medioTransportePersona = medioTransportePersona
    this.tiposObjetosSustraidos = tiposObjetosSustraidos
  }

  save (db) {
    const insertDenunciaSql = `
        INSERT INTO Denuncia (
          Fecha,
          HoraAproximada,
          OtrasReferencias,
          EscenarioDelHecho,
          Detalle,
          MedioTransportePersona,
          TiposObjetosSustraidos
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
      `

    return db.execute(insertDenunciaSql, [
      this.fecha,
      this.horaAproximada,
      this.otrasReferencias,
      this.escenarioDelHecho,
      this.detalle,
      this.medioTransportePersona,
      this.tiposObjetosSustraidos
    ])
  }
}
