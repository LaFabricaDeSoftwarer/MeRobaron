export class Reporter {
  constructor (
    email,
    aceptaCondicion,
    apellido,
    nombre,
    tipoDocumento,
    nroDocumento,
    edad,
    telefono,
    calle,
    numero,
    barrio,
    ciudad

  ) {
    this.email = email
    this.aceptaCondicion = aceptaCondicion
    this.apellido = apellido
    this.nombre = nombre
    this.tipoDocumento = tipoDocumento
    this.nroDocumento = nroDocumento
    this.edad = edad
    this.telefono = telefono
    this.calle = calle
    this.numero = numero
    this.barrio = barrio
    this.ciudad = ciudad
  }

  async save (connectionPool) {
    const insertReporterSql = `
      INSERT INTO Denunciante (
        Email,
        AceptaCondicion,
        Apellido,
        Nombre,
        TipoDocumento,
        NroDocumento,
        Edad,
        Telefono,
        Calle,
        Numero,
        Barrio,
        Ciudad         
      ) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    try {
      const [result] = await connectionPool.query(insertReporterSql, [
        this.email,
        this.aceptaCondicion,
        this.apellido,
        this.nombre,
        this.tipoDocumento,
        this.nroDocumento,
        this.edad,
        this.telefono,
        this.calle,
        this.numero,
        this.barrio,
        this.ciudad
      ])
      return { id: result.insertId }
    } catch (error) {
      throw new Error('Error al guardar los datos: ' + error.message)
    }
  }
}
export default Reporter
