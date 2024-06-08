export class Person {
  constructor (apellido, nombre, calle, numero, barrio, ciudad, tipoDocumento, nroDocumento) {
    this.apellido = apellido
    this.nombre = nombre
    this.calle = calle
    this.barrio = barrio
    this.numero = numero
    this.ciudad = ciudad
    this.tipoDocumento = tipoDocumento
    this.nroDocumento = nroDocumento
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
      throw new Error('Error al guardar los datos: ' + error.message)
    }
  }
}

export default Person
