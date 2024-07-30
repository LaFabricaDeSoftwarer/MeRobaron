export class Person {
  constructor (apellido, nombre, calle, numero, barrio, ciudad, tipoDocumento, nroDocumento) {
    this.apellido = apellido || '' // Usa una cadena vacía si es nulo
    this.nombre = nombre || ''
    this.calle = calle || ''
    this.barrio = barrio || ''
    this.numero = numero || ''
    this.ciudad = ciudad || ''
    this.tipoDocumento = tipoDocumento || ''
    this.nroDocumento = nroDocumento || ''
  }

  async save (connectionPool) {
    const insertPersonSql = `
      INSERT INTO Persona (
        Apellido,
        Nombre,
        Calle,
        Barrio,
        Numero,
        Ciudad,
        TipoDocumento,
        NroDocumento
      ) VALUES (?,?,?,?,?,?,?,?)
    `

    try {
      if (!this.apellido && !this.nombre) {
        throw new Error('Apellido y Nombre no pueden estar ambos vacíos')
      }

      const [result] = await connectionPool.query(insertPersonSql, [
        this.apellido,
        this.nombre,
        this.calle,
        this.barrio,
        this.numero,
        this.ciudad,
        this.tipoDocumento,
        this.nroDocumento
      ])
      return { id: result.insertId }
    } catch (error) {
      throw new Error('Error al guardar los datos de la persona: ' + error.message)
    }
  }
}
