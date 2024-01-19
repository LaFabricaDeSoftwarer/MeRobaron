export class Report {
  constructor (
    usuarioID,
    fecha,
    horaAproximada,
    otrasReferencias,
    escenarioDelHecho,
    detalle,
    direccionID,
    medioTransportePersona,
    tiposObjetosSustraidos
  ) {
    this.usuarioID = usuarioID
    this.fecha = fecha
    this.horaAproximada = horaAproximada
    this.otrasReferencias = otrasReferencias
    this.escenarioDelHecho = escenarioDelHecho
    this.detalle = detalle
    this.direccionID = direccionID
    this.medioTransportePersona = medioTransportePersona
    this.tiposObjetosSustraidos = tiposObjetosSustraidos
  }

  save (db, callback) {
    const insertDenunciaSql = `
        INSERT INTO Denuncia (
          UsuarioID,
          Fecha,
          HoraAproximada,
          OtrasReferencias,
          EscenarioDelHecho,
          Detalle,
          DireccionID,
          MedioTransportePersona,
          TiposObjetosSustraidos
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
    db.query(insertDenunciaSql, [
      this.usuarioID,
      this.fecha,
      this.horaAproximada,
      this.otrasReferencias,
      this.escenarioDelHecho,
      this.detalle,
      this.direccionID,
      this.medioTransportePersona,
      this.tiposObjetosSustraidos
    ], (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result)
      }
    })
  }
}
